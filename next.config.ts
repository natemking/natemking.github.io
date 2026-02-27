import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.shields.io',
            },
        ],
    },
    output: 'export',
};

export default nextConfig;
