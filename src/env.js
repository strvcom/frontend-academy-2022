/* eslint-disable no-process-env */

'use strict'

// JavaScript file because it's shared with build and configuration processes.

/**
 * Environment variables.
 *
 * Never make this dynamic: Next.js needs `process.env.*` syntax to inject envs statically.
 */
const variables = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_DEPLOYMENT_URL: process.env.NEXT_PUBLIC_DEPLOYMENT_URL,

  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,

  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
}

/**
 * Type-safe constrain to enforce an environment variable to be
 * available and return it's value, or throw otherwise.
 *
 * Provide a second parameter for a default value (usually null, to so opt-out of enforce).
 *
 * @type {<K extends keyof typeof variables, B = undefined>(name: K, fallback?: B) => B extends undefined ? (string) : (string | B)}
 */
const env = (name, fallback) => {
  if (
    typeof fallback === 'undefined' &&
    typeof variables[name] === 'undefined'
  ) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return variables[name]
}

module.exports = { variables, env }
