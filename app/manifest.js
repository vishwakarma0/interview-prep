import settings from "@/settings"; 

export default function manifest() {
    return {
        name: settings.APP.name || 'Timeline',
        short_name: settings.APP.short_name || 'Timeline',
        description: settings.APP.description || 'Timeline is an all-in-one Rapid Launch Kit designed to help you create websites and launch your software as a service (SaaS) startups quickly.',
        start_url: '/',
        display: 'standalone',
        background_color: settings.COLORS.backgroundColor || '#fff',
        theme_color: settings.COLORS.themeColor || '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}