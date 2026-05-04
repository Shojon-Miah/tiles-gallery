/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["mongodb"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
