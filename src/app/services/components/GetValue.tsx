import { ButtonExel } from '@/components/ButtonExel';
import { PageLayout } from '@/util/PageLayout'
import React from 'react'

interface GetValueProps {
    title: string;
    subtitle: string;
    cta: {
        text: string;
        link: string;   
        isPrimary?: boolean;
    }
    items: string[];
}
export default function GetValue({ title, subtitle, cta, items }: GetValueProps) {
    return (
        <div className={`${PageLayout} bg-[#F2F4F8] md:px-8 h-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10  mt-20`}>
            <div className='flex flex-col gap-4 md:gap-8 justify-self-start text-gray-900 md:col-span-2'>
                <h2 className='text-lg font-semibold uppercase'>{subtitle}</h2>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <div className="flex gap-4 items-center ">
                    {
                    items.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 whitespace-nowrap'>
                            <div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold'>{index + 1}</div>
                            <p className='text-lg'>{item}</p>
                            
                        </div>
                        
                    ))
                }
                </div>
            </div>
            <div className='justify-self-end flex items-center'>
                <ButtonExel text={cta.text} isPrimary={cta.isPrimary} href={cta.link}/>
            </div>
        </div>
    )
}
