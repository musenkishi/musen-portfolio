import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config, { }) => {
    config.module.rules.push({
      test: /troika-three-text/,
      use: 'null-loader'
    });
    
    return config;
  }
};

export default nextConfig;
