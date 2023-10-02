/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["cloud.appwrite.io"],
    },
};

module.exports = nextConfig

module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }