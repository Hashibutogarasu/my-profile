const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? "/my-profile" : "",
    assetPrefix: isProd ? 'https://hashibutogarasu.github.io/my-profile/' : undefined,
};

module.exports = nextConfig;
