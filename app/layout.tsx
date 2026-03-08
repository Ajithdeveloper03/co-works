import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Universe Coworks | Global Coworking Hub in Trichy, India',
  description: 'Redefining innovation with global-standard workspace infrastructure in Trichy. 40-60% cost advantage for startups and offshore teams from USA, UK, and UAE.',
  keywords: 'coworking trichy, offshore development center india, startup ecosystem tamil nadu, virtual office trichy, global workspace india',
  openGraph: {
    title: 'Universe Coworks | Premium Coworking Spaces in Trichy',
    description: 'Experience world-class coworking with premium amenities and a vibrant community.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://universecoworks.com',
    siteName: 'Universe Coworks',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Universe Coworks Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universe Coworks',
    description: 'Premium coworking spaces in Trichy.',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop'],
  },
  icons: {
    icon: '/favi.png',
  },
  metadataBase: new URL('https://universecoworks.com'),

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D1FRF3P3X5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D1FRF3P3X5');
          `}
        </Script>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        {/* SEO: Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Universe Coworks",
              "url": "https://universecoworks.com",
              "telephone": ["+918675556079", "+919789913368"],
              "email": "info@universecoworks.com",
              "image": "https://universecoworks.com/logo.png",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "74A, Salai Rd, 2nd Floor, Opp. Vaishali Hospital, Thillai Nagar East",
                "addressLocality": "Tiruchirappalli",
                "addressRegion": "Tamil Nadu",
                "postalCode": "620018",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }]
            })
          }}
        />
      </body>
    </html>
  );
}
