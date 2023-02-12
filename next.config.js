/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.API_HOST],
  },
  async redirects() {
    return [
      {
        source: '/feed/:path/:path*',
        destination: '/feed', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/login/:path/:path*',
        destination: '/login', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/perfil/:path/:path/:path*',
        destination: '/perfil', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
