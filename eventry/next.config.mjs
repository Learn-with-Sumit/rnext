/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com'
        },
      ],
    },
  };

  export default nextConfig;
