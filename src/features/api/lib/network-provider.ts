type NetworkProviderContext = {
  client: NetworkProvider
}

type BeforeRequestInterceptor = (
  request: Request,
  options: NetworkProviderOptions,
  context: NetworkProviderContext
) => Request | Promise<Request>

type AfterRequestInterceptor = (
  request: Request,
  options: NetworkProviderOptions,
  response: Response,
  context: NetworkProviderContext
) => Response | Promise<Response>

type NetworkProviderInterceptors = {
  /**
   * Methods run before each request
   */
  beforeRequest?: BeforeRequestInterceptor[]

  /**
   * Methods run after each request
   */
  afterRequest?: AfterRequestInterceptor[]
}

type NetworkProviderOptions = RequestInit & {
  /**
   * Base URL to use for all requests
   */
  baseUrl?: string

  /**
   * Middleware to run before and after each request
   */
  interceptors?: NetworkProviderInterceptors

  /**
   * Data to be sent with the request
   */
  json?: unknown

  /**
   * Headers to be sent with the request
   */
  headers?: Headers
}

/**
 * Ensure minimal request options object.
 */
const normalizeOptions = (options: NetworkProviderOptions) => ({
  ...options,
  method: options.method ?? 'GET',
  headers: options.headers ?? new Headers(),
  interceptors: {
    beforeRequest: options.interceptors?.beforeRequest ?? [],
    afterRequest: options.interceptors?.afterRequest ?? [],
  },
})

/**
 * Merge multiple request header configs.
 */
const mergeHeaders = (...sources: HeadersInit[]) => {
  const result: Record<string, string> = {}

  for (const source of sources) {
    const headers = new Headers(source)
    let header = headers.entries().next()
    while (!header.done) {
      result[header.value[0]] = header.value[1]
      header = headers.entries().next()
    }
  }

  return new Headers(result)
}

/**
 * Merge multiple interceptor objects.
 */
const mergeInterceptors = (...list: NetworkProviderInterceptors[]) =>
  list.reduce(
    (left, right) => ({
      beforeRequest: [
        ...(left.beforeRequest ?? []),
        ...(right.beforeRequest ?? []),
      ],
      afterRequest: [
        ...(left.afterRequest ?? []),
        ...(right.afterRequest ?? []),
      ],
    }),
    { beforeRequest: [], afterRequest: [] }
  )

/**
 * Merge multiple request configs.
 */
const mergeOptions = (...list: Array<NetworkProviderOptions | undefined>) =>
  list
    .filter((options): options is NetworkProviderOptions => Boolean(options))
    .reduce((left, right) => ({
      ...left,
      ...right,
      headers: mergeHeaders(left.headers ?? {}, right.headers ?? {}),
      interceptors: mergeInterceptors(
        left.interceptors ?? {},
        right.interceptors ?? {}
      ),
    }))

/**
 * Resolves and absolute URL from url and baseUrl.
 */
const resolveRequestURL = (url: string, baseUrl?: string) =>
  [baseUrl ?? window.location.toString(), url]
    .map((path) => path.replace(/(?:^\/+)|(?:\/+$)/gu, ''))
    .join('/')

class NetworkProvider {
  private readonly options: NetworkProviderOptions

  constructor(options: NetworkProviderOptions) {
    this.options = options
  }

  extend(options: NetworkProviderOptions) {
    return new NetworkProvider(mergeOptions(this.options, options))
  }

  async get(url: string, options?: NetworkProviderOptions) {
    return await this.makeRequest(
      url,
      mergeOptions(this.options, options, { method: 'GET' })
    )
  }

  async post(url: string, options?: NetworkProviderOptions) {
    return await this.makeRequest(
      url,
      mergeOptions(this.options, options, { method: 'POST' })
    )
  }

  async put(url: string, options?: NetworkProviderOptions) {
    return await this.makeRequest(
      url,
      mergeOptions(this.options, options, { method: 'PUT' })
    )
  }

  async patch(url: string, options?: NetworkProviderOptions) {
    return await this.makeRequest(
      url,
      mergeOptions(this.options, options, { method: 'PATCH' })
    )
  }

  async delete(url: string, options?: NetworkProviderOptions) {
    return await this.makeRequest(
      url,
      mergeOptions(this.options, options, { method: 'DELETE' })
    )
  }

  /**
   * Send arbitrary request
   * Use this only for requests with unknown method
   */
  async makeRequest(url: string, options: NetworkProviderOptions) {
    const { baseUrl, interceptors, ...requestOptions } =
      normalizeOptions(options)

    // Set content-type header to application/json if not already set
    if (requestOptions.json !== undefined) {
      requestOptions.body = JSON.stringify(requestOptions.json)
      requestOptions?.headers?.set(
        'content-type',
        requestOptions?.headers.get('content-type') ?? 'application/json'
      )
    }

    // Create request with base url
    let request = new Request(resolveRequestURL(url, baseUrl), requestOptions)

    // Run before request middleware
    if (interceptors?.beforeRequest?.length) {
      request = await interceptors.beforeRequest.reduce(
        async (request, interceptor) =>
          await interceptor(await request, options, { client: this }),
        Promise.resolve(request)
      )
    }

    // Make request
    let responsePromise = fetch(request)

    // Run after request middleware
    if (interceptors?.afterRequest?.length) {
      responsePromise = interceptors.afterRequest.reduce(
        async (responsePromise, interceptor) =>
          await interceptor(request, options, await responsePromise, {
            client: this,
          }),
        responsePromise
      )
    }

    return await responsePromise
  }
}

export type {
  BeforeRequestInterceptor,
  AfterRequestInterceptor,
  NetworkProviderInterceptors,
  NetworkProviderOptions,
}

export { NetworkProvider }
