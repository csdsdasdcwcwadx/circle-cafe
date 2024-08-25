/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.google.com',
            'lh3.googleusercontent.com',
            'localhost',
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
