import Image from 'next/image'
import React from 'react'
import { ButtonExel } from '../ButtonExel'
import SubTitle from '@/util/SubTitle'

export default function Hero() {
    return (
        <section className=" px-4 md:px-8 xl:px-14 2xl:px-20 grid grid-cols-1 md:grid-cols-2 h-screen gap-4">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-8">
                <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold">
                    Your One-Stop Solution for Seamless Financial Management
                </h1>
                <SubTitle>
                    Exel Consultancy connects you to <span className=" font-bold"> HMRC-compliant payroll software, umbrella services, and accountancy solutions;</span> saving you time, money, and compliance headaches.
                </SubTitle>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <ButtonExel
                        text="Get a Free Consultation"
                        variant={'default'}
                        className='w-full md:w-auto'
                    />
                    <ButtonExel
                        text="Get a Quote"
                        variant={'outline'}
                        className='w-full md:w-auto'
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
