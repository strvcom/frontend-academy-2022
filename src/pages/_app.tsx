import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'
import { GlobalStyle } from '~/features/ui/theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <HeadDefault />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
