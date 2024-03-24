/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orirzehunwkcqwagnbau.supabase.co",
      },
    ],
    domains: ["s.pstatic.net"],
  },
};

export default nextConfig;
