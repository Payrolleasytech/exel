import React from 'react';
import Image from 'next/image';
import { PageLayout } from '@/util/PageLayout';

export interface Items {
    title: string;
    description: string;
    icon: string;
}
interface ServicesYouCanGetProps {
    items: Items[];
    mainTitle: string
}

export default function ServicesYouCanGet({ items, mainTitle }: ServicesYouCanGetProps) {
    return (
        <div className={`${PageLayout} grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6`}>
            <h1 className='col-span-full text-3xl font-bold text-center mb-8'> {mainTitle} </h1>
            {items.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4'>
                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                    <h3 className='text-xl font-semibold'>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

