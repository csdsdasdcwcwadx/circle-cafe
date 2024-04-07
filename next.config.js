/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/local/:path*",
                destination: "http://localhost:3001/:path*",
            },
        ]
    },
    images: {
        domains: [
            'www.google.com',
            'lh3.googleusercontent.com',
            'http://localhost:3001/'
        ],
    },
    env: {
        GOOGLE_ID: 'AIzaSyAHVz-pXx5jCMeh87LLqxZtPeXLUGK3Dm0',
        GOOGLE_MAP_ID: '61f7405a4126f824',
    },
    headers: [
        {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
        }
    ]
}

module.exports = nextConfig;
