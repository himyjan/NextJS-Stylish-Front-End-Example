/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.appworks-school.tw',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
