// next.config.js
const nextConfig = {
  output: 'standalone', // Required for Netlify
  images: {
    unoptimized: true, // Disable if not using Next.js Image Optimization
  },
  // Add if using internationalization
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;