const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? "/my-profile" : "",
    basePath: isProd ? "/my-profile" : "",
};

module.exports = nextConfig;
