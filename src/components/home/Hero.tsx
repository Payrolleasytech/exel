import Image from 'next/image'
import React from 'react'
import { ButtonExel } from '../ButtonExel'

export default function Hero() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 h-screen gap-4">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
                    Your One-Stop Solution for Seamless Financial Management
                </h1>
                <p className="text-lg">
                    Exel Consultancy connects you to HMRC-compliant payroll software, umbrella services, and accountancy solutions; saving you time, money, and compliance headaches.
                </p>
                <div className='flex gap-4'>
                    <ButtonExel
                        text="Get a Free Consultation"
                        variant={'default'}
                    />
                    <ButtonExel
                        text="Learn More"
                        variant={'outline'}
                    />
                </div>
            </div>
            <div className="hidden md:block my-auto">
                {/* Placeholder for an image or graphic */}
                <Image
                    src="/hero.jpg"
                    alt="Exel Hero Image"
                    width={500}
                    height={500}
                    className="w-full h-auto "
                />
            </div>
        </section>
    )
}
