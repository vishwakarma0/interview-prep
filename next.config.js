const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any image domains you need
  },
  experimental: {
    mdxRs: true,
  }
}

module.exports = withBundleAnalyzer(nextConfig) 