/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
  env: {
    SB_ACCESS_TOKEN: process.env.SB_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
