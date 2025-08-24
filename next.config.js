/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow loading local images from the public directory
    unoptimized: true,
  },
};

module.exports = nextConfig;
