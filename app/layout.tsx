import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

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
  alternates: {
    canonical: 'https://universecoworks.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        {/* SEO: Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CoworkingSpace",
              "name": "Universe Coworks",
              "image": "https://universecoworks.com/images/home-hero-coworking.png",
              "description": "Premium coworking space in Trichy offering private offices, dedicated desks, and virtual office solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4th Floor, Kannan Towers, 11th Cross East",
                "addressLocality": "Thillai Nagar",
                "addressRegion": "Trichy",
                "postalCode": "620018",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "10.8296",
                "longitude": "78.6924"
              },
              "telephone": "+919789913368",
              "priceRange": "₹5000 - ₹50000",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
