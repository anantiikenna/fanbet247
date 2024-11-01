import type { NextConfig } from "next";
 /** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        port: '', // No specific port
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '', // No specific port
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
