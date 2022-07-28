import * as Sentry from '@sentry/nextjs'
import type { ReactNode } from 'react'
import { Component } from 'react'

import ServerErrorPage from '~/pages/500'

type Props = {
  fallback?: ReactNode
  children: ReactNode
  type?: string
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    const { type } = this.props

    Sentry.captureMessage(
      `Error catched in ErrorBoundary with type: ${type}`,
      'error'
    )
    Sentry.captureException(error)
  }

  render() {
    const { type, fallback, children } = this.props
    const { hasError } = this.state

    if (hasError) {
      if (type === 'root') {
        return <div>root error</div>
      }

      return fallback ?? <ServerErrorPage />
    }

    return children
  }
}

export { ErrorBoundary }
