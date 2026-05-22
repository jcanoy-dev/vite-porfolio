/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  ...(!isDev && { output: 'export' }),
  ...(isDev && {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://python-6adtmb7uc-jcanoy-dev.vercel.app/api/:path*',
        },
      ]
    },
  }),
}

export default nextConfig
