const APP = { 
  name: "Timeline",
  short_name: "Timeline",
  description: "Timeline helps",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.timeline.com",
  author: "proferex",
  twitterProfile: "@proferextech",
  keywords: [
    "website creation",
    "saas builder",
    "nextjs boilerplate",
    "stripe integration",
    "website builder",
    "online business"
  ],
}

const JSONLD = {
  price: "10.00",
  currency: "USD",
  appRating: "4.9",
  appRatingCount: "14",
  appCategory: "EducationalApplication",
  datePublished: "2024-06-01",
}

const URLS = {
  login: "/login",
  protected: "/private",
}

// Marketing Configuration
const MARKETING = {
  googleTagManagerId: "GTM-TMC7WQFN", // Replace with your actual Google Tag Manager ID
  enableMetaConversionAPI: true
}

// If you want to change payment provider once you already have customers, make sure you migrate old customers to new payment provider.
// Change payment provider will be a breaking change! Be careful.
const PAYMENT_PROVIDER = "Stripe"; // "Stripe" OR "LemonSqueezy"

const NO_AUTH_CHECKOUT = true;

const PLAN_DETAILS = [
  {
    name: "Lifetime",
    // price: 99, // $248 OFF
    price: 197, // $150 OFF
    anchorPrice: 347,
    currency: "USD",
    pricePeriod: "",
    description: "Lifetime updates and support. One-time payment.",
    features: [
      { name: "NextJS UI Modules", hasFeature: true },
      { name: "Stripe & LemonSqueezy Payment Integration", hasFeature: true },
      { name: "Authentication with Magic Links and Social OAuth", hasFeature: true },
      { name: "Private/Protected Pages & API Routes", hasFeature: true },
      { name: "Database Integration", hasFeature: true },
      { name: "Tailwind CSS Styling, Color Schemes and One-click Dark Mode", hasFeature: true },
      { name: "Fully SEO-optimized", hasFeature: true },
      { name: "Documentation Generator", hasFeature: true },
      { name: "Shadcn UI Integration", hasFeature: true },
      { name: "Lifetime Updates", hasFeature: true },
      { name: "Premium Support. You can message us any time.", hasFeature: true },
    ],
    payment: {
      // STRIPE
      id: "price_1PqxCrD1tkc9Qcz3zsbCuM5S", // LIVE
      // id: "price_1PrH3AD1tkc9Qcz3pkIOzgzh", // TEST
      // LEMONSQUEEZY
      // id: NIL // LIVE
      // id: "474200", // TEST
      credits: 100, // Default is 100, but you can change.
      rollover: false, // Default is false, which means credits are not rolled over but are refilled
      mode: "payment", // Only required for Stripe, but no problem is kept in Lemonsqueezy also.
      // STRIPE
      // couponId: "yuNtPSI6", // LIVE ($248 OFF)
      couponId: "NE6oWExC", // TEST ($150 OFF)
      // couponId: "P6MhTo1S", // TEST ($248 OFF)
      // LEMONSQUEEZY
    },
    isPopular: true
  },
  // FOR TESTING timeline-dev BELOW HERE
  {
    name: "Lifetime",
    price: 99,
    anchorPrice: 347,
    currency: "USD",
    pricePeriod: "",
    description: "Lifetime updates and support. One-time payment.",
    features: [
      { name: "NextJS UI Modules", hasFeature: true },
      { name: "Stripe & LemonSqueezy Payment Integration", hasFeature: true },
      { name: "Authentication with Magic Links and Social OAuth", hasFeature: true },
      { name: "Private/Protected Pages & API Routes", hasFeature: true },
      { name: "Database Integration", hasFeature: true },
      { name: "Tailwind CSS Styling, Color Schemes and One-click Dark Mode", hasFeature: true },
      { name: "Fully SEO-optimized", hasFeature: true },
      { name: "Documentation Generator", hasFeature: true },
      { name: "Shadcn UI Integration", hasFeature: true },
      { name: "Lifetime Updates", hasFeature: true },
      { name: "Premium Support. You can message us any time.", hasFeature: true },
    ],
    payment: {
      // STRIPE
      // id: "price_1PqxCrD1tkc9Qcz3zsbCuM5S", // LIVE
      id: "price_1PrH3AD1tkc9Qcz3pkIOzgzh", // TEST
      // LEMONSQUEEZY
      // id: NIL // LIVE
      // id: "474200", // TEST
      credits: 100, // Default is 100, but you can change.
      rollover: false, // Default is false, which means credits are not rolled over but are refilled
      mode: "payment", // Only required for Stripe, but no problem is kept in Lemonsqueezy also.
      // STRIPE
      // couponId: "yuNtPSI6", // LIVE ($248 OFF)
      couponId: "P6MhTo1S", // TEST ($248 OFF)
      // LEMONSQUEEZY
    },
    isPopular: true
  },
  // ABOVE HERE IS FOR TESTING
  {
    name: "Yearly",
    price: 197,
    anchorPrice: 297,
    currency: "USD",
    pricePeriod: "year",
    description: "Continuous updates and support for one year. Renew annually.",
    features: [
      { name: "NextJS UI Modules", hasFeature: true },
      { name: "Stripe & LemonSqueezy Payment Integration", hasFeature: true },
      { name: "Authentication with Magic Links and Social OAuth", hasFeature: true },
      { name: "Private/Protected Pages & API Routes", hasFeature: true },
      { name: "Database Integration", hasFeature: true },
      { name: "Tailwind CSS Styling, Color Schemes and One-click Dark Mode", hasFeature: true },
      { name: "Fully SEO-optimized", hasFeature: true },
      { name: "Documentation Generator", hasFeature: true },
      { name: "Shadcn UI Integration", hasFeature: true },
      { name: "Continuous Updates for One Year.", hasFeature: true },
      { name: "Premium Support. You can message us any time.", hasFeature: true },
    ],
    payment: {
      // STRIPE
      id: "price_1PqxE3D1tkc9Qcz3flXWtPLd", // LIVE
      // id: "price_1PrH3oD1tkc9Qcz3h2ztQGVQ", // TEST
      // LEMONSQUEEZY
      // id: NIL // LIVE
      // id: "474221" // TEST
      credits: 100, // Default is 100, but you can change.
      rollover: false, // Default is false, which means credits are not rolled over but are refilled
      mode: "subscription", // Only required for Stripe, but no problem is kept in Lemonsqueezy also.
      // STRIPE
      couponId: "W33Fxbib", // LIVE ($100 OFF)
      // couponId: "9s5zft3Q", // TEST ($100 OFF)
      // LEMONSQUEEZY
    },
  },
];

const COLORS = {
  themeColor: "#e8c468", 
  backgroundColor: "#00303d"
};

const ENABLE_DARK_MODE = false;

const FIXEDNAVBAR = true;
export default { APP, JSONLD, URLS, MARKETING, PAYMENT_PROVIDER, NO_AUTH_CHECKOUT, PLAN_DETAILS, COLORS, ENABLE_DARK_MODE, FIXEDNAVBAR };