import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/Hv_Garage' : '',
  images: {
    unoptimized: true,
  },
};

// export default nextConfig;
// const nextConfig: NextConfig = {
//   output: 'export',
//   basePath: '/Hv_Garage',
//   images: {
//     unoptimized: true, 
//   },
// };

export default nextConfig;
