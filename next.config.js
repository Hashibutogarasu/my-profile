const isProd = process.env.NODE_ENV === 'production';
const urlPrefix = '/';

/** @type {import('next').NextConfig} */
const nextConfig = isProd ? {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    output: 'export',
} : {
    unoptimized: true,
};

module.exports = nextConfig;
