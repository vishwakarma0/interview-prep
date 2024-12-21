import { GoogleTagManager } from '@next/third-parties/google'
import { inter } from '@/utils/fonts';
import { getViewportConfig, getSEOConfig } from "@/utils/seo";
import UtilityComponents from '@/utils/components/UtilityComponents';
import settings from '@/settings';
import Script from 'next/script';
import "./globals.css";

export const viewport = getViewportConfig();

// This ensures that default SEO tags are applied to all pages within our application.
// You can customize these tags for individual pages by passing parameters to the getSEOConfig() function.
export const metadata = getSEOConfig();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      {settings.MARKETING?.googleTagManagerId && (
        <GoogleTagManager gtmId={settings.MARKETING.googleTagManagerId} />
      )}
      <body>
        <div className="min-h-screen flex flex-col">
          <UtilityComponents>
            {children}
          </UtilityComponents>
        </div>
        <Script src="https://r.wdfl.co/rw.js" data-rewardful="bce399"></Script>
        <Script id="rewardful-queue" strategy="beforeInteractive">
          {`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
        </Script>
      </body>
    </html>
  );
}