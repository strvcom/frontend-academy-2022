const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
