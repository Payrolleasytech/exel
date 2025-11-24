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
    const canonicalUrl = `https://yourdomain.com/services/${slug}`;

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
      metadataBase: new URL('https://yourdomain.com'),
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
