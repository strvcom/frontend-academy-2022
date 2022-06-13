import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { HeadDefault } from '~/features/core/components/HeadDefault'
import { EventFilterContextProvider } from '~/features/events/contexts/event-filter'
import { EventViewContextProvider } from '~/features/events/contexts/event-view'
import { GlobalStyle } from '~/features/ui/theme/global'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <HeadDefault />
      <QueryClientProvider client={queryClient}>
        <EventFilterContextProvider>
          <EventViewContextProvider>
            <Component {...pageProps} />
          </EventViewContextProvider>
        </EventFilterContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
