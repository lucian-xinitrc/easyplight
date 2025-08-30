import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Easy Plight",
  description: "Created by Mebhevy Services",
  keywords: ['Next.js', 'SEO', 'Thumbnail', 'Tutorial'],
  authors: [{ name: 'Lucian-Florin' }],
  viewport: 'width=device-width, initial-scale=1.0',

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Easy Plight",
    description: "Created by Mebhevy Services",
    url: 'https://plight.mebhevy.com',
    siteName: 'LucianWS',
    images: [
      {
        url: '/images/thumbnail.png', // imaginea ta
        width: 1200,
        height: 630,
        alt: 'Mebhevy',
      },
    ],
    locale: 'en_EN',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: '/images/thumbnail.png',
    title: 'Easy Plight',
    description: 'Lets built the web together',
    images: ['/images/thumbnail.png'],
    site: 'https://plight.mebhevy.com',
    creator: 'Lucian-Florin',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
