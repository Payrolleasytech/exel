import { ButtonExel } from '@/components/ButtonExel'
import  { ReusableFAQPlaceholder } from '@/components/placeholders/FAQPlaceholder'
import { PageLayout } from '@/util/PageLayout'
import Link from 'next/link'
import React from 'react'

interface ServicesFaqProps {
title: string
subtitle?: string
items: {
    question: string
    answer: string
}[]}

export default function ServicesFaq( { title, subtitle, items }: ServicesFaqProps) {
  return (
    <div className={`${PageLayout} grid gap-6 my-12 py-6 md:py-18 text-center mx-auto bg-[#F2F4F8]`}>
      <h1 className='text-3xl font-bold uppercase text-blue-900'>{title}</h1>
      {subtitle && <h2 className='text-lg'>{subtitle}</h2>}
      <div className="">

        <ReusableFAQPlaceholder items={items} />

      </div>
      <div className="mt-6 mx-auto max-w-sm">
        {/* <ButtonExel text='See More FAQs' /> */}
        <Link href="/faq"
                    className={`w-full md:w-auto text-center rounded p-2 transition-all duration-300
    bg-primary text-white hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg
  `}
                >
                   See More FAQs
                </Link>
      </div>
    </div>
  )
}
