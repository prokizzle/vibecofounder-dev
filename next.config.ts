import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/alternatives/:path*",
        destination: "/comparisons/:path*",
        permanent: true,
      },
      {
        source: "/vs/:path*",
        destination: "/comparisons/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;