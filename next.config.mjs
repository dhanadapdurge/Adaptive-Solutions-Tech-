import fs from 'fs';

if (fs.existsSync('FORCE_CRASH_LOCK')) {
    fs.unlinkSync('FORCE_CRASH_LOCK');
    console.log("\n\n==========================================");
    console.log("SERVER AUTOMATICALLY STOPPED TO APPLY TURBOPACK FIX");
    console.log("Please run 'npm run dev' again!");
    console.log("==========================================\n\n");
    process.exit(0);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
