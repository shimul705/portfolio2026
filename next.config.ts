import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The resume used to live at /portfolio.pdf — keep old shared links working.
      { source: "/portfolio.pdf", destination: "/Shimul_Mahmud_Resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
