import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import React from 'react'
import WhyChooseUsPlaceholder from './placeholders/WhyChooseUsPlaceholder'
import { WhyChooseusDetail } from '@/util/data/WhyChooseusDetail'

export default function WhyChooseUs() {
    return (

        <section className={`${PageLayout} grid grid-cols-1 gap-4`}>
            <div className=" mx-auto flex flex-col items-center justify-center">
                <SectionTitle title="Why Choose Us" />
                <p>
                    A smarter way to manage your payroll and financial operations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {WhyChooseusDetail.map((item, index) => (
                    <WhyChooseUsPlaceholder
                        key={index}
                        title={item.title}
                        description={item.description}
                        ctaText={item.ctaText}
                        ctaLink={item.ctaLink}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    )
}
