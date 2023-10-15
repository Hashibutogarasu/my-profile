const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? "/my-profile" : "",
    basePath: isProd ? "/my-profile" : "",
    unoptimized: true,
};

module.exports = nextConfig;
