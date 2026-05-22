
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://python-6adtmb7uc-jcanoy-dev.vercel.app/api/:path*',
      },
    ]
  },
}

export default nextConfig
