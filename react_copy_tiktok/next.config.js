/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.cdn-rouje.com"],
  },
};

module.exports = nextConfig;
