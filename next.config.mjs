/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.linguol.ink'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/localization-management',
        destination: '/',
        permanent: true,
      },
      {
        source: '/translation-workflow',
        destination: '/',
        permanent: true,
      },
      {
        source: '/translation-automation',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
