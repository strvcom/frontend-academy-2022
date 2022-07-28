import * as Sentry from '@sentry/nextjs'

import { env } from './src/env'

const SENTRY_DSN = env('NEXT_PUBLIC_SENTRY_DSN')

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
  })
} else {
  console.warn('Sentry DSN was not provided. Starting without Sentry')
}
