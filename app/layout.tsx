import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import ChunkLoadRecovery from '@/components/ChunkLoadRecovery';
import Script from 'next/script';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
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
    icon: [{ url: '/favi.png' }, { url: '/favicon.ico' }],
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL('https://universecoworks.com'),

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ChunkLoadRecovery />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D1FRF3P3X5"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            try {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-D1FRF3P3X5', {
                send_page_view: false
              });
            } catch (e) {
              console.error('Google Analytics configuration failed:', e);
            }
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
        {/* SEO: Local Business Schema - Full @graph with both locations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://universecoworks.com/#organization",
                  "name": "Universe Coworks",
                  "url": "https://universecoworks.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://universecoworks.com/logo.png",
                    "width": 400,
                    "height": 100
                  },
                  "sameAs": [
                    "https://www.instagram.com/universecoworks",
                    "https://www.linkedin.com/company/universecoworks",
                    "https://www.facebook.com/universecoworks"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-97899-13368",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Tamil"],
                    "areaServed": "IN"
                  }
                },
                {
                  "@type": "CoworkingSpace",
                  "@id": "https://universecoworks.com/#location-thillai",
                  "name": "Universe Coworks \u2013 Thillai Nagar East",
                  "description": "Premium coworking space in Thillai Nagar East, Trichy offering hot desks, dedicated desks, private cabins, virtual offices, meeting rooms, and enterprise-grade internet with 100% power backup.",
                  "url": "https://universecoworks.com",
                  "telephone": ["+91-86755-56079", "+91-97899-13368"],
                  "email": "info@universecoworks.com",
                  "image": "https://universecoworks.com/logo.png",
                  "logo": "https://universecoworks.com/logo.png",
                  "priceRange": "\u20b9\u20b9",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "74A, Salai Rd, 2nd Floor, Opp. Vaishali Hospital, Thillai Nagar East",
                    "addressLocality": "Tiruchirappalli",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "620018",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "10.8231",
                    "longitude": "78.7022"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ],
                  "amenityFeature": [
                    { "@type": "LocationFeatureSpecification", "name": "High-Speed Fiber Internet", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Meeting Rooms", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Private Cabins", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Dedicated Desks", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Hot Desks", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Pantry & Beverages", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Printing & Scanning", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "24/7 CCTV Security", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Virtual Office / GST Address", "value": true }
                  ],
                  "hasMap": "https://maps.google.com/?q=Universe+Coworks+Thillai+Nagar+Trichy",
                  "parentOrganization": { "@id": "https://universecoworks.com/#organization" }
                },
                {
                  "@type": "CoworkingSpace",
                  "@id": "https://universecoworks.com/#location-chatram",
                  "name": "Universe Coworks \u2013 Chatram Bus Stand",
                  "description": "Modern coworking space near Chatram Bus Stand, Trichy offering flexible hot desks, dedicated desks, private cabins, meeting rooms, and business registration support.",
                  "url": "https://universecoworks.com",
                  "telephone": ["+91-86755-56079", "+91-97899-13368"],
                  "email": "info@universecoworks.com",
                  "image": "https://universecoworks.com/logo.png",
                  "logo": "https://universecoworks.com/logo.png",
                  "priceRange": "\u20b9\u20b9",
                  "currenciesAccepted": "INR",
                  "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Door No. 2, Ground Floor, 34, 1st Cross Rd, V N Nagar, Chatram",
                    "addressLocality": "Tiruchirappalli",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "620002",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "10.8150",
                    "longitude": "78.6993"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ],
                  "amenityFeature": [
                    { "@type": "LocationFeatureSpecification", "name": "High-Speed Fiber Internet", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "100% Power Backup", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Meeting Rooms", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Private Cabins", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Dedicated Desks", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Hot Desks", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Pantry & Beverages", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "24/7 CCTV Security", "value": true },
                    { "@type": "LocationFeatureSpecification", "name": "Virtual Office / GST Address", "value": true }
                  ],
                  "hasMap": "https://maps.google.com/?q=Universe+Coworks+Chatram+Trichy",
                  "parentOrganization": { "@id": "https://universecoworks.com/#organization" }
                }
              ]
            })
          }}
        />
        {/* SEO: LocalBusiness Schema with Wikipedia sameAs */}
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
              "priceRange": "\u20b9\u20b9",
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
              }],
              "sameAs": [
                "https://en.wikipedia.org/wiki/Special:MyPage/sandbox"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
