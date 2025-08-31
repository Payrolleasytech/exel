import { PageLayout } from '@/util/PageLayout'
import React from 'react'
import { ExpertiseCard, Title } from './Utils.about'

export default function ExpertiseThatDeliversResult() {
  return (
    <section className={`${PageLayout} flex flex-col items-center w-full justify-center gap-4 lg:gap-8 border-y py-8 lg:py-16`}> 
      <Title title='Expertise That Delivers Results' />
      <p className='max-w-4xl'>

        Our team combines decades of payroll industry experience with cutting-edge technology expertise. Here&apos;s what sets us apart:
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full`}>
        <ExpertiseCard score={99} description="Client Satisfaction Rate" src="/about/client-satisfaction.png" />
        <ExpertiseCard score={100} description="Compliance Guarantee" src="/about/compliance.png" />
        <ExpertiseCard score={30} description="Average Cost Savings" src="/about/average-cost-saving.png" />
        <ExpertiseCard score={500} description="Clients Served" src="/about/client-served.png" />
      </div>
    </section>
  )
}
