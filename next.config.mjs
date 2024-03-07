/** @type {import('next').NextConfig} */
const nextConfig = {
  /** @type {import('next').NextConfig} */
  experimental: {
    serverComponentsExternalPackages: ["oslo"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
