
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === "production" ? "/my-profile" : "",
    images:[
        "/icons/genshin_impact.png",
        "/icons/starrail.png"
    ]
};

module.exports = nextConfig;
