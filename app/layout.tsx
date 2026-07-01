import Script from "next/script";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export const metadata: Metadata = {
  title: "CallFlow – AI-Powered Customer Communications",
  description: "Voice, SMS, and AI in one workspace for sales and support teams.",
  openGraph: {
    title: "CallFlow – AI-Powered Customer Communications",
    description: "Voice, SMS, and AI in one workspace for sales and support teams.",
    url: "https://saas-marketing-site-chi.vercel.app",
    siteName: "CallFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CallFlow – AI-Powered Customer Communications",
    description: "Voice, SMS, and AI in one workspace for sales and support teams.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
  <head>
    <script src="https://t.contentsquare.net/uxa/6ada5a23b5cc0.js" defer></script>
  </head>
  <body className={geist.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-1EYNFV6X4V`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1EYNFV6X4V');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}