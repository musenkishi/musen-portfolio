import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    useTypeScriptCli: true,
  },
};

export default nextConfig;
