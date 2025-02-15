/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            },
            {
                hostname: "daisyui.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
