// This font system allows you to conveniently use all Google Fonts.
// Font files are downloaded at build time. No requests are sent to Google by the browser.

import { 
    Inter,
    Roboto,
    Alegreya_Sans_SC
} from 'next/font/google';

import localFont from 'next/font/local';

// Inter is a variable font, hence wont require weights
export const inter = Inter({ 
    subsets: ['latin'],
    display: 'swap',
});

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

// Use an underscore (_) for font names with multiple words. E.g. Alegreya Sans SC should be imported as Alegreya_Sans_SC.
export const alegreya_sans_sc = Alegreya_Sans_SC({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: "normal",
    display: "swap",
});

