/** @type {import('next').NextConfig} */
import nextra from 'nextra'
// import withBundleAnalyzer from '@next/bundle-analyzer';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
});

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'api.producthunt.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'www.theinvisibletourist.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'camo.envatousercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

// Combine Nextra with your existing configuration
export default withNextra(nextConfig);

// const withBundleAnalyzerConfig = withBundleAnalyzer({
//     enabled: process.env.ANALYZE === 'true',
// });

// export default withBundleAnalyzerConfig(withNextra(nextConfig)); 
// THIS IS HOW YOU BUILD: $env:ANALYZE="true"; npm run build