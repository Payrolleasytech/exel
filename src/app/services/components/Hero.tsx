import { PageLayout } from '@/util/PageLayout'
import React from 'react';
import Image from 'next/image';


interface Items {
    label: string;
    href: string;
    target: string;
    isPrimary?: boolean

}
interface HeroProps {
    title: string;
    description: string;
    isPrimary?: boolean;
    image: string;
    cta: Items[]
}
export default function Hero({ title, description, isPrimary, image, cta }: HeroProps) {
  return (
    <div className={`${PageLayout} ${isPrimary && 'bg-primary'} min-h-[50vh] max-h-[600px] py-6 md:py-20 items-center justify-between  w-full grid grid-cols-1 md:grid-cols-2 h-full gap-2 lg:gap-3 text-start`}>
        <div className={`flex flex-col gap-4 md:gap-8 justify-self-start ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-lg'>{description}</p>
            <div className='mt-4  md:mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-3'>
                <button className={`px-4 py-2 cursor-pointer rounded-lg ${!cta[0]?.isPrimary ? 'bg-white text-gray-900' : 'bg-primary text-white border'}`}>
                    {cta[0]?.label}
                </button>
                <button className={`px-4 cursor-pointer py-2 rounded-lg ${isPrimary ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}>
                    {cta[1]?.label}
                </button>
            </div>
        </div>
        <div className={`justify-self-end hover:shadow-lg`}>
            <Image src={image} alt={title} width={450} height={400} className='rounded-lg shadow-lg' />
        </div>
    </div>
  )
}
