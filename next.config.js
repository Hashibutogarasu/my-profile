
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    assetPrefix: process.env.NODE_ENV === "production" ? "/my-profile" : ""
};

module.exports = nextConfig;
