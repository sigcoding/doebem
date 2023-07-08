/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "doebem.org.br",
      },
    ],
  },
};

module.exports = nextConfig;
