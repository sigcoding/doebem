/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        hostname: "doebem.org.br",
      },
      {
        hostname: "api.openpix.com.br",
      },
    ],
  },
  env: {
    BASE_URL: "https://api.woovi.com",
    WOOVI_KEY:
      "Q2xpZW50X0lkXzI4NTAzY2RiLWE5ZTMtNDAzZC1hMmI0LWJmMmMwNjgyODU1ZTpDbGllbnRfU2VjcmV0X0tGVytJenBSMEV4aExzaFNuOUlDRWtKd2syN1lHZk8vMXlHMVYxYjJ5UWM9",
  },
};

module.exports = nextConfig;
