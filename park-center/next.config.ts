/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Recommended for Netlify
  images: {
    unoptimized: true, // Disable Image Optimization API if not needed
  },
};

module.exports = nextConfig;