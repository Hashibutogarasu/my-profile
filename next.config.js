const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = isProd ? {
    output: 'export',
    assetPrefix: "/my-profile",
    basePath: "/my-profile",
} : {
    unoptimized: true,
};

module.exports = nextConfig;
