/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["media.valorant-api.com"]
  }
}

module.exports = nextConfig
