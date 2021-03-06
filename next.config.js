/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['rb.gy', 'content.linkedin.com', 'static-exp1.licdn.com', 'media.licdn.com', 'www.iconsdb.com', 'media-exp1.licdn.com', 'lh3.googleusercontent.com'],
  },
  async redirects () {
    return [{
      source: "/app",
      destination: "/app/feed",
      permanent: true
    }]
  }
}

module.exports = nextConfig
