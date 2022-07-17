/** @type {import('next').NextConfig} */
const nextConfig = {
  //fix ts errors
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['www.thefamouspeople.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
