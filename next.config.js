/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.reservoir.tools',
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
      },
    ],
  },
}

module.exports = nextConfig