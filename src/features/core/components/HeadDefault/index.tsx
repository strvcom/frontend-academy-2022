import Head from 'next/head'
import type { FC } from 'react'

import { env } from '~/env'

const baseUrl = env('NEXT_PUBLIC_DEPLOYMENT_URL', 'http://localhost:3000')

export const HeadDefault: FC = () => (
  <Head>
    <meta charSet="UTF-8" />
    <title>Eventio</title>
    <meta
      name="description"
      content="A platform that allows registered users to sign up for and create events."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323c46" />
    <meta name="msapplication-TileColor" content="#f9f9fb" />
    <meta name="theme-color" content="F9F9FB" />
    <meta property="og:title" content="Eventio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={baseUrl} />
    <meta property="og:image" content={`${baseUrl}/share-banner.png`} />
  </Head>
)
