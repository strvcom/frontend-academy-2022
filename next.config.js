const { withSentryConfig } = require('@sentry/nextjs')
const bundleAnalyzer = require('@next/bundle-analyzer')

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

const withBundleAnalyzer = bundleAnalyzer({
  enabled: Boolean(process.env.ANALYZE),
})

module.exports = withBundleAnalyzer(
  // withSentryConfig(nextConfig, {
  //   silent: true,
  // org: 'strv-temporary',
  // project: 'frontend-academy',
  // })
  nextConfig
)
