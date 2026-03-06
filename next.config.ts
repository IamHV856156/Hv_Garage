import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Hv_Garage',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
