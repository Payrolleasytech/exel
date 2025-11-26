import { ButtonExel } from '@/components/ButtonExel'
import { PageLayout } from '@/util/PageLayout'
import Link from 'next/link'
import React from 'react'

interface HowItWorksProps {
    title?: string
    subtitle?: string
    items: {
        title: string
        description: string
    }[]
}
export default function HowItWorks({ title, subtitle, items }: HowItWorksProps) {

    return (
        <div className={`${PageLayout} grid gap-6 my-12 text-center`}>
            <h1 className='text-3xl font-bold'>{title  ?? "Steps on how it works"}</h1>
            <h2 className='text-lg'>{subtitle }</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className='flex hover:shadow-lg p-2  hover:border border-primary rounded-2xl flex-col max-w-xs mx-auto justify-center items-center'>
                        <span className="flex items-center justify-center bg-primary p-2 h-8 w-8 rounded-full font-bold text-white">
                            {index + 1}
                        </span>

                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p className='text-lg'>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="mx-auto max-w-sm mt-4">
                {/* <ButtonExel text='Book a Free Demo' /> */}
                <Link href="/contact"
                    className={`w-full md:w-auto text-center rounded p-2 transition-all duration-300
    bg-primary text-white hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg
  `}
                >
                    Book a Free Demo
                </Link>
            </div>
        </div>
    )
}
