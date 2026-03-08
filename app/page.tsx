import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://universecoworks.com/',
  },
  openGraph: {
    url: 'https://universecoworks.com/',
  }
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Universe Coworks",
    "url": "https://universecoworks.com"
  };



  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Universe Coworks located in Trichy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "East Thillai Nagar Salai Road and Chatram Bus Stand."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer day passes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Day pass starts at ₹499/day including high-speed internet and unlimited coffee."
        }
      },
      {
        "@type": "Question",
        "name": "Are there long-term contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All memberships are flexible month-to-month with no lock-in."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <HomeContent />
    </>
  );
}
