/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // http://localhost:4000/file-bucket/
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '4000', pathname: '/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '4000', pathname: '/**' },

      // ✅ إضافة دومين Render
      { protocol: 'https', hostname: 'swaphub-api-2kbm.onrender.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
