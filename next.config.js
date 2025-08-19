/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isProd && isGitHubPages ? '/spillmoretea-frontend' : '',
  assetPrefix: isProd && isGitHubPages ? '/spillmoretea-frontend/' : '',
  images: {
    unoptimized: true
  },
  // Disable trailing slash for better GitHub Pages compatibility
  trailingSlash: true
}

module.exports = nextConfig
