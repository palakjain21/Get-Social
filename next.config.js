/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
