import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { UserContextProvider } from '~/features/auth'
import { ErrorBoundary, HeadDefault } from '~/features/core'
import {
  EventFilterContextProvider,
  EventViewContextProvider,
} from '~/features/events'
import { theme } from '~/features/ui'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary type="next_root">
      <theme.GlobalStyle />
      <HeadDefault />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary type="app_root">
          <UserContextProvider>
            <EventFilterContextProvider>
              <EventViewContextProvider>
                <Component {...pageProps} />
              </EventViewContextProvider>
            </EventFilterContextProvider>
          </UserContextProvider>
        </ErrorBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default MyApp
