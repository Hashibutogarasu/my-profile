const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = isProd ? {
    basePath: process.env.GITHUB_ACTIONS ? "/githubpages.karasu256.com" : "",
    output: 'export',
} : {
    unoptimized: true,
};

module.exports = nextConfig;
