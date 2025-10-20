
import React from 'react'
import Hero from '../components/Hero';
import ServicesYouCanGet from '../components/ServicesYouCanGet';
import GetValue from '../components/GetValue';
// import HowItWorks from '../components/HowItWorks';
import ServicesFaq from '../components/ServicesFaq';
import ExploreMoreWays from '../components/ExploreMoreWays';
// import { FromBlogSection } from '../components/FromOurBlog';
import TakeActionCard from '../components/TakeAction';
// import { exploreMoreWaysItems, faqItems, howItWorksItems, items } from '../components/data';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/services/getService';



interface ServicePageProps {
  params: { slug: string };
}
 

 
export async function getServices(slug: string) {
  // const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const url = "https://tidy-fish-f8bacf1595.strapiapp.com";

  const res = await fetch(`${url}/api/services?slug=${slug}`, {
    next: { revalidate: 60}
  });

  if (!res.ok) return null;
const data = await  res.json()
return data.data;

  
}




export default async function page({params}: ServicePageProps) {
  // const data = await getServices(params.slug);
  const service = await getServiceBySlug(params.slug)
  if (!service) return notFound();
  // console.log("Service data..." , params.slug,  service.Blocks);
  // const baseUrl = process.env.NEXT_STRAPI_API_URL


   const blocksByType: { [key: string]: any } = {};
  service.Blocks?.forEach((block: any) => {
    blocksByType[block.__component] = block;
  });

  const renderOrder = [
    "hero.hero",
    "global.services-second-section", 
    "global.value-card",
    "how-it-works", // You'll need to update this to match your actual component name
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
                image={block?.featuredImage.url}
                isPrimary={block.isPrimary}
                cta={block.cta}
                
              />
            );

          case "global.services-second-section":
            return (
               <ServicesYouCanGet
              key={block.title}
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
                key={block.title}
                title={block.title}
                subtitle={block.subTitle}
                cta={{
                  isPrimary: true,
                  text: block.cta.label,
                  link: "/contact"

                }}
                items={[]}
              />
            );

          // 

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

          // case "global.testimonial-section":
          //   return (
          //     <TestimonialSection
          //       key={block.id}
          //       testimonials={block.testimonialCards?.map((t: any) => ({
          //         id: t.id,
          //         message: t.message,
          //         name: t.name,
          //         profileImage: t.profileImage?.url,
          //       }))}
          //     />
          //   );

          // case "global.from-our-blog-section":
          //   // You'll need to create this component
          //   return (
          //     <FromOurBlog
          //       key={block.id}
          //       // Add your props here based on your Strapi structure
          //     />
          //   );

          case "global.need-to-take-action-section":
            return (
              <TakeActionCard
                key={block.title}
                title={block.title}
                description={block.description}
                cta={{
                  text: block.cta.label,
                  isPrimary: false,
                  link: "/contact"
                }}
              />
            );

          default:
            return null;
        }
      })}
      

      {/* {service.Blocks?.map((block:any) => {
        switch (block.__component) {
          case "hero.hero":
            return (
              <Hero
                key={block.title}
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
              key={block.title}
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
                key={block.title}
                title={block.title}
                subtitle={block.subTitle}
                cta={{
                  isPrimary: true,
                  text: block.cta.label,
                  link: "/contact"

                }}
                items={[]}
              />
            );

          // case "global.testimonial-section":
          //   return (
          //     <section key={block.id}>
          //       {block.testimonialCards?.map((t: any) => (
          //         <div key={t.id}>
          //           <p>{t.message}</p>
          //           <p>{t.name}</p>
          //           <img src={t.profileImage?.url} alt={t.name} />
          //         </div>
          //       ))}
          //     </section>
          //   );

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

          case "global.need-to-take-action-section":
            return (
              <TakeActionCard
                key={block.title}
                title={block.title}
                description={block.description}
                cta={{
                  text: block.cta.label,
                  isPrimary: false,
                  link: "/contact"
                }}
              />
            );

          default:
            return null;
        }
      })} */}
    </main>
  );

}



