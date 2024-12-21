module.exports = {
    // Set this to the base URL of your website.
    // Using an environment variable allows for easier configuration across different environments.
    // Ensure that the base URL in your sitemap align with the final destination after any redirects (e.g., with or without 'www'). This alignment helps Google and other search engines properly crawl and index your site.
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.timeline.com",
    generateRobotsTxt: true, // Set to true to generate the robots.txt file. Defauly value is true.
    exclude: [ // An array of relative path to exclude from the sitemap.
        "/lp", 
        "/lp/**",
        "/op", 
        "/op/**",
        "/blog", 
        "/blog/**",
        "/landing-pages", 
        "/landing-pages/**",
        "/modules", 
        "/modules/**",
        "/private", 
        "/private/**",
        "/login",
        "/login/*", 
        "/manifest.webmanifest",
        "**/apple-icon.*",
        "**/icon.*",
        "**/twitter-image.*",
        "**/opengraph-image.*",
    ],
    sitemapSize: 5000, // When the number of URLs exceeds this limit, additional sitemap files will be created. Currently set to 5000.
};