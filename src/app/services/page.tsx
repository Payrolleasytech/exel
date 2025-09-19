
import React from 'react'
import Hero from './components/Hero'
import ServicesYouCanGet from './components/ServicesYouCanGet'
import { items } from './components/data'
import GetValue from './components/GetValue'

export default function page() {
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
    </main>
  )
}
