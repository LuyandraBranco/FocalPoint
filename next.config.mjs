import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
    webpack: (config) => {
        config.cache = false;
        return config;
    },
};

export default nextConfig;