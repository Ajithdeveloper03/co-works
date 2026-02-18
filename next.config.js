/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
};

module.exports = nextConfig;