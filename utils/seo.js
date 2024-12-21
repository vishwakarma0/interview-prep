import settings from "@/settings";

export const getViewportConfig = () => {
    return {
        width: "device-width",
        initialScale: 1,
        themeColor: settings.COLORS.backgroundColor || "#fff"
    };
}

export const getSEOConfig = ({ title, description, keywords, twitterProfile, author, canonicalRelativeURL } = {}) => {
    return {
        title: title || settings.APP.name,
        description: description || settings.APP.description,
        metadataBase: new URL(settings.APP.url),
        alternates: {
            canonical: canonicalRelativeURL || settings.APP.url
        },
        openGraph: {
            title: title || settings.APP.name,
            description: description || settings.APP.description,
            url: canonicalRelativeURL ? `${settings.APP.url}${canonicalRelativeURL}` : settings.APP.url,
            siteName: settings.APP.name,
            locale: "en_US",
            type: "website"
        },
        robots: {
            index: true,
            follow: true,
            googleBot: "index, follow"
        },
        applicationName: settings.APP.name,
        appleWebApp: {
            title: settings.APP.name,
            statusBarStyle: "default",
            capable: true
        },
        keywords: keywords || settings.APP.keywords,
        twitter: {
            card: "summary_large_image",
            title: title || settings.APP.name,
            description: description || settings.APP.description,
            creator: twitterProfile || settings.APP.twitterProfile,
            site: settings.APP.twitterProfile,
        },
        authors: [{ name: author || settings.APP.author }],
        creator: author || settings.APP.author,
        publisher: author || settings.APP.author
    };
}


const JSONLD = ({ title, description, canonicalRelativeURL, imageUrl } = {}) => {
    const publishDate = settings.JSONLD.datePublished || new Date().toISOString().split('T')[0];

    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: title || settings.APP.name,
        description: description || settings.APP.description,
        author: {
            "@type": "Person",
            name: settings.APP.author || "App Author",
        },
        offers: [
            {
                "@type": "Offer",
                price: settings.JSONLD.price || "10.00",
                priceCurrency: settings.JSONLD.currency || "USD",
                availability: "https://schema.org/InStock",
                validFrom: publishDate
            },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: settings.JSONLD.appRating || "4.9",
            ratingCount: settings.JSONLD.appRatingCount || "14",
        },
        applicationCategory: settings.JSONLD.appCategory || "EducationalApplication",
        datePublished: publishDate,
        image: imageUrl || `${settings.APP.url}/icon.png`, // Full absolute image url
        url: canonicalRelativeURL ? `${settings.APP.url}${canonicalRelativeURL}` : settings.APP.url // Full absolute url
    };
};

// Its better to avoid keeping getJSONLD in rootlayout to avoid duplication. Put it inside pages or layouts.
// If in layouts, its not recommended to call it again in inner pages to avoid duplicate JSON-LD scripts.
export const getJSONLD = (props = {}) => { 
    const jsonLd = JSONLD(props);
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};