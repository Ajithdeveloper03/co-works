/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '', 
  output: 'export',         
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;