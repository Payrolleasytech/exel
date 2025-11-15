import React from 'react'
import Hero from '../components/Hero';
import ServicesYouCanGet from '../components/ServicesYouCanGet';
import GetValue from '../components/GetValue';
import HowItWorks from '../components/HowItWorks';
import ServicesFaq from '../components/ServicesFaq';
import ExploreMoreWays from '../components/ExploreMoreWays';
import TakeActionCard from '../components/TakeAction';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/services/getService';

// Updated interface for Next.js 14
interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Await the params promise
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

  return (
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
  );
}