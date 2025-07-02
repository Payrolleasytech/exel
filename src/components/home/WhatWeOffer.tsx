
import React from 'react'
import SectionTitle from '@/util/SectionTitle';
import ServicePlaceholder from '../placeholders/ServicePlaceholder';
import { ServiceDetails } from '@/util/data/ServiceDetails';
import SubTitle from '@/util/SubTitle';



export default function WhatWeOffer() {
    return (
        <section className="grid grid-cols-1 px-4 md:px-8 xl:px-14 2xl:px-20">
            <div className="flex flex-col gap-2 2xl:gap-4">
                <SectionTitle title="What We Offer" />
                <SubTitle>
                    Our services cover the right solutions to streamline your financial operations.
                </SubTitle>
            </div>

            {
                ServiceDetails.map((service, index) => (
                    <li className=" flex flex-col list-none" key={index}>

                        <ServicePlaceholder
                            key={index}
                            title={service.title}
                            description={service.description}
                            listItems={service.items}
                            ctaText={service.ctaText}
                            ctaLink={service.ctaLink}
                            icon={<service.icon />}
                        />
                    </li>
                ))
            }




        </section>
    )
}
