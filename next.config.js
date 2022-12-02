/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    runtime: 'experimental-edge',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in',
        port: '',
        pathname: '/img/faces/**',
      },
    ],
  },
}

module.exports = nextConfig
