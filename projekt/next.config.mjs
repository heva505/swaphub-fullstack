/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // http://localhost:4000/file-bucket/
    remotePatterns: [
      // للـ localhost أثناء التطوير
      { protocol: 'http', hostname: 'localhost', port: '4000', pathname: '/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '4000', pathname: '/**' },

      // ✅ دومين الـ API على Render
      { protocol: 'https', hostname: 'swaphub-api-2kbm.onrender.com', pathname: '/**' },
      { protocol: 'http',  hostname: 'swaphub-api-2kbm.onrender.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
