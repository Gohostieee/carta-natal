/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [{
      protocol: 'https',
      hostname: 'carta-natal.es',
      port: '',
      pathname: '/archivos/cartas/**'
    }]
  }
}

module.exports = nextConfig
