
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
 

 
export async function getServices(slug: string) {
  const res = await fetch(`http://localhost:1337/api/services?slug=${slug}`, {
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
  console.log("Service data..." , params.slug,  service)
  return (
    <main className='mx-auto '>
      <Hero title={'Smart Payroll Software for Modern Businesses'} description={'Automate your entire payroll process in minutes, not hours. From PAYE calculations to RTI submissions - we handle the complexity so you can focus on growing your business.'} 
      image={'/payroll-hero.png'} isPrimary />
      
      <ServicesYouCanGet items={items} />
      <GetValue title={'Payroll Software That Gives You Peace of Mind'} subtitle={'Get value for your time and money'} cta={{
        text: 'Start Your Free Trial Today',
        link: '/',
        isPrimary: true
      }} items={["100% HMRC compliant", "Automated calculations", "Real-time reporting"]} />
      <HowItWorks title='How Exel’s Payroll Software Works' subtitle='Get Set Up in Under 48 Hours. No Tech Expertise Needed.' items={howItWorksItems} />
      <ServicesFaq title='Frequently Asked Questions' items={faqItems} subtitle='Everything you need to know about our payroll software' />
      <ExploreMoreWays title='Explore More Ways Exel Can Help Your Business' items={exploreMoreWaysItems} />
      <FromBlogSection />
      <TakeActionCard
        title="Ready to Automate Payroll for Your business?"
        description='Join hundreds of UK businesses who trust Exel Consultancy for their payroll and finance needs. Speak with an expert today!'
        cta={{
          text: 'Contact Support',
          link: '/support',
          isPrimary: true
        }}
      />

    </main>
  )
}



