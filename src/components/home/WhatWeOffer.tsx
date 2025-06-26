
import React from 'react'
import ServicePlaceholder from './ServicePlaceholder'
import PayrollSoftware from './PayrollSoftware';



const serviceData = [
    {
        title: "Payroll Software (Licensed & Sold by Exel Consultancy)",
        description: "Our proprietary payroll software provides seamless automation, compliance, and efficiency for businesses.",
        ctaText: "Learn More",
        items: ["Fully Licensed & HMRC-Approved", "Seamless Payroll Processing & Tax Calculations", "Integrates with HR & Accounting Software", "Dedicated Customer Support & Training"],
        ctaLink: "/services/consulting",
        icon: <PayrollSoftware  />
    },
];
  

export default function WhatWeOffer() {
    return (
        <section className="grid grid-cols-1">
            <div className="flex flex-col gap-2 2xl:gap-4 my-6 md:my-12">
                <h1 className="text-2xl md:text-4xl font-bold text-left ">
                What We Offer
            </h1>
            <p>
                Our services cover the right solutions to streamline your financial operations.
            </p>
            </div>
        <ServicePlaceholder
            title={serviceData[0].title}
            description={serviceData[0].description}
            listItems={serviceData[0].items}
            ctaText="Learn More"
            ctaLink="/services/consulting"
            icon={serviceData[0].icon}
        />

    

        </section>
    )
}
