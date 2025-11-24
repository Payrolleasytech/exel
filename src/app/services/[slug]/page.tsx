import React from 'react'
import Hero from '../components/Hero';
import ServicesYouCanGet from '../components/ServicesYouCanGet';
import GetValue from '../components/GetValue';
import HowItWorks from '../components/HowItWorks';
import ServicesFaq from '../components/ServicesFaq';
import ExploreMoreWays from '../components/ExploreMoreWays';
import TakeActionCard from '../components/TakeAction';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServices } from '@/services/getService';
import type { Metadata } from 'next';

// Updated interface for Next.js 14
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const service = await getServiceBySlug(slug);
    
    if (!service) {
      return {
        title: 'Service Not Found',
        description: 'The requested service could not be found.',
      };
    }

    // Extract the first paragraph for meta description
    const extractDescription = (blocks: any[]) => {
      const heroBlock = blocks?.find((block: any) => block.__component === "hero.hero");
      if (heroBlock?.description) {
        // Clean and truncate description
        return heroBlock.description.replace(/<[^>]*>/g, '').slice(0, 160) + '...';
      }
      return `Professional ${service.title} services by Exel Consultancy. Expert solutions for your business needs.`;
    };

    const metaDescription = extractDescription(service.Blocks || []);
    
    // Construct canonical URL
    const canonicalUrl = `https://https://www.exelconsultancy.co.uk/services/${slug}`;

    return {
      title: `${service.title} | Exel Consultancy`,
      description: metaDescription,
      keywords: [
        service.title.toLowerCase(),
        'payroll services',
        'accounting services',
        'umbrella services',
        'UK business',
        'compliance',
        ...(service.title.toLowerCase().includes('payroll') ? ['payroll solutions', 'payroll management'] : []),
        ...(service.title.toLowerCase().includes('account') ? ['accounting', 'bookkeeping'] : []),
      ],
      authors: [{ name: 'Exel Consultancy' }],
      creator: 'Exel Consultancy',
      publisher: 'Exel Consultancy',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL('https://www.exelconsultancy.co.uk/'),
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${service.title} | Exel Consultancy`,
        description: metaDescription,
        url: canonicalUrl,
        siteName: 'Exel Consultancy',
        images: [
          {
            url: service.Blocks?.find((block: any) => block.__component === "hero.hero")?.featuredImage?.url || '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: `${service.title} - Exel Consultancy`,
          },
        ],
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${service.title} | Exel Consultancy`,
        description: metaDescription,
        creator: '@exelconsultancy',
        images: [service.Blocks?.find((block: any) => block.__component === "hero.hero")?.featuredImage?.url || '/og-image.jpg'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Service | Exel Consultancy',
      description: 'Professional business services by Exel Consultancy.',
    };
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  try {
    const services = await getServices();
    
    return services.data.map((service: any) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  
  const service = await getServiceBySlug(slug);
  if (!service) return notFound();

  const blocksByType: { [key: string]: any } = {};
  service.Blocks?.forEach((block: any) => {
    blocksByType[block.__component] = block;
  });

  const renderOrder = [
    "hero.hero",
    "global.services-second-section", 
    "global.value-card",
    "global.how-it-works",
    "global.faq-section",
    "global.explore-more-services-section",
    "global.testimonial-section",
    "global.from-our-blog-section",
    "global.need-to-take-action-section"
  ];

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: blocksByType["hero.hero"]?.description?.replace(/<[^>]*>/g, '').slice(0, 200) || `Professional ${service.title} services`,
    provider: {
      '@type': 'Organization',
      name: 'Exel Consultancy',
      url: 'https://www.exelconsultancy.co.uk/',
      logo: 'https://www.exelconsultancy.co.uk/exportedlogo.png',
    },
    areaServed: 'United Kingdom',
    serviceType: service.title,
    ...(blocksByType["global.how-it-works"] && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Service Process',
        itemListElement: blocksByType["global.how-it-works"].cards?.map((card: any, index: number) => ({
          '@type': 'Offer',
          position: index + 1,
          name: card.title,
          description: card.description,
        })),
      },
    }),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="mx-auto">
        {renderOrder.map((componentType) => {
          const block = blocksByType[componentType];
          if (!block) return null;

          switch (componentType) {
            case "hero.hero":
              return (
                <Hero
                  key={block.title}
                  title={block.title}
                  description={block.description}
                  image={block?.featuredImage?.url}
                  isPrimary={block.isPrimary}
                  cta={block.cta}
                />
              );

            case "global.services-second-section":
              return (
                <ServicesYouCanGet
                  key={block.title}
                  mainTitle={block.title}
                  items={block.serviceCards?.map((c: any) => ({
                    title: c.title,
                    description: c.description,
                    icon: c.icon?.url,
                  }))}
                />
              );

            case "global.value-card":
              return (
                <GetValue
                  key={block.title}
                  title={block.title}
                  subtitle={block.subTitle}
                  cta={{
                    isPrimary: true,
                    text: block.cta?.label,
                    link: "/contact"
                  }}
                  items={[]}
                />
              );

            case "global.faq-section":
              return (
                <ServicesFaq
                  key={block.title}
                  title={block.faqOnService}
                  subtitle={block.subTitle}
                  items={block.faqs}
                />
              );

            case "global.explore-more-services-section":
              return (
                <ExploreMoreWays
                  key={block.title}
                  title={block.title}
                  items={block.exploreMoreServiceCards}
                />
              );

            case "global.how-it-works":
              return (
                <HowItWorks key={block.title} items={block.cards} />
              );

            case "global.need-to-take-action-section":
              return (
                <TakeActionCard
                  key={block.title}
                  title={block.title}
                  description={block.description}
                  cta={{
                    text: block.cta?.label,
                    isPrimary: false,
                    link: "/contact"
                  }}
                />
              );

            default:
              return null;
          }
        })}
      </main>
    </>
  );
}