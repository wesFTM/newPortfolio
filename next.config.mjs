/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-040eb69763f14186b11b39e2584847be.r2.dev",
      },
    ],
  },
};

export default nextConfig;
