import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'seeklogo.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'jotai.org' },
      { protocol: 'https', hostname: 'commons.wikimedia.org' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'asset-2.tstatic.net' },
      { protocol: 'https', hostname: 'www.flaticon.com' },
      { protocol: 'https', hostname: 'icon-icons.com' },
      { protocol: 'https', hostname: 'vitest.dev' },
      { protocol: 'https', hostname: 'sentry.io' },
      { protocol: 'https', hostname: 'uxwing.com' },
      { protocol: 'https', hostname: 'make.wordpress.org' },
    ],
  },
};

export default nextConfig;
