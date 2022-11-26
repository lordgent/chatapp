/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home/home',
      },
      {
        source: '/status',
        destination: '/mobile/stories/stories-mobile'
      }
    ]
  },
}

module.exports = nextConfig
