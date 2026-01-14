/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/co-works',
  assetPrefix: '/co-works', 
  output: 'export',         
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;