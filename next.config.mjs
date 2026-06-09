/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Unsplash already serves modern, correctly-sized formats (auto=format + w=).
    // Skipping Next's on-the-fly optimizer makes images load straight from
    // Unsplash's global CDN — dramatically faster, especially in development.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
