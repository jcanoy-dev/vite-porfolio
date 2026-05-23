import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const config = require('config')

/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  ...(!isDev && { output: 'export' }),
  env: {
    NEXT_PUBLIC_API_BASE_URL: config.get('api.baseUrl'),
    NEXT_PUBLIC_ANALYTICS_API_KEY: config.get('api.analyticsKey'),
  },
  ...(isDev && {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://python-pg.vercel.app/api/:path*',
        },
      ]
    },
  }),
}

export default nextConfig
