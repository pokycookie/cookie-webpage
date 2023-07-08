const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'app/styles'),
      // ref: https://www.codeconcisely.com/posts/how-to-use-scss-with-css-modules-in-nextjs/
    }
    return config
  },
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
