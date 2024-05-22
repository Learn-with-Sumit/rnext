/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
        ],
      },
};

export default nextConfig;
