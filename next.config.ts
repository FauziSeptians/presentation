import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Cari rule yang handle SVG
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Rule untuk SVG dengan ?url (import as URL)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Rule untuk SVG jadi React component (SVGR)
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // ⬅️ INI YANG BENER, gak ambil dari fileLoaderRule
        resourceQuery: { not: [/url/] }, // ⬅️ INI JUGA, langsung bikin array baru
        use: ['@svgr/webpack'],
      }
    );

    // Exclude SVG dari file loader default
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  // ... sisa config kamu tetap sama
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: false,
  },
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
