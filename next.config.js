/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: [
      "@zora-drops-utils",
      "app",
      "components",
      "lib"
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mixtape',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
