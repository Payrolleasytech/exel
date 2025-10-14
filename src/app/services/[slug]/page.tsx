
import React from 'react'
import Hero from '../components/Hero';
import ServicesYouCanGet from '../components/ServicesYouCanGet';
import GetValue from '../components/GetValue';
import HowItWorks from '../components/HowItWorks';
import ServicesFaq from '../components/ServicesFaq';
import ExploreMoreWays from '../components/ExploreMoreWays';
import { FromBlogSection } from '../components/FromOurBlog';
import TakeActionCard from '../components/TakeAction';
import { exploreMoreWaysItems, faqItems, howItWorksItems, items } from '../components/data';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/services/getService';




interface ServicePageProps {
  params: { slug: string };
}

export default async function page({params}: ServicePageProps) {
  // const data = await getServices(params.slug);
  const service = await getServiceBySlug(params.slug)
  if (!service) return notFound();
  console.log("Service data..." , service);
  // const baseUrl = process.env.NEXT_STRAPI_API_URL
 return (
    <main className="mx-auto">
      {service.Blocks?.map((block:any, id) => {
        switch (block.__component) {
          case "hero.hero":
            return (
              <Hero
                key={id}
                title={block.title}
                description={block.description}
                image={block?.featuredImage.url}
                isPrimary={block.isPrimary}
                cta={block.cta}
                
              />
            );

          case "global.services-second-section":
            return (
              <ServicesYouCanGet
              key={id}
                mainTitle={block.title}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                key={id}
                title={block.title}
                subtitle={block.subTitle}
                cta={{
                  text: block.cta.label,
                  isPrimary: block.cta.isPrimary,
                  link: `/`
                }}
                items={[]} 
              />
            );

          case "global.testimonial-section":
            return (
              <section key={block.id}>
                {block.testimonialCards?.map((t: any) => (
                  <div key={t.id}>
                    <p>{t.message}</p>
                    <p>{t.name}</p>
                    <img src={t.profileImage?.url} alt={t.name} />
                  </div>
                ))}
              </section>
            );

          case "global.faq-section":
            return (
              <ServicesFaq
                key={block.id}
                title={block.subTitle}
                subtitle={block.faqOnService}
                items={block.faqs}
              />
            );

          case "global.explore-more-services-section":
            return (
              <ExploreMoreWays
                key={id}
                title={block.title}
                items={block.exploreMoreServiceCards}
              />
            );
          case "global.how-it-works":
            return (
             <HowItWorks key={id} items={block.cards} />
            );

          case "global.need-to-take-action-section":
            return (
              <TakeActionCard
                key={id}
                title={block.title}
                description={block.description}
                cta={{
                  link: block.cta.href,
                  text: block.cta.label
                }}
              />
            );

          default:
            return null; // unknown block, skip
        }
      })}
    </main>
  );

}



