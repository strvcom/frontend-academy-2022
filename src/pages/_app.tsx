import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'
import { DashboardContextProvider } from '~/features/events/contexts/dashboard'
import { EventsContextProvider } from '~/features/events/contexts/events'
import { GlobalStyle } from '~/features/ui/theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <HeadDefault />
      <DashboardContextProvider>
        <EventsContextProvider>
          <Component {...pageProps} />
        </EventsContextProvider>
      </DashboardContextProvider>
    </>
  )
}

export default MyApp
