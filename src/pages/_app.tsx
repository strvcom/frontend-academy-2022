import type { AppProps } from 'next/app'

import { HeadDefault } from '~/features/core/components/HeadDefault'

import '~/features/ui/theme/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadDefault />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
