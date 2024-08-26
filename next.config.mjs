/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddg0cip9uom1w.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
