/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Keep if needed for Vercel
  images: {
    unoptimized: true, // Keep if needed
  },
  // Remove the i18n configuration completely
};

module.exports = nextConfig;