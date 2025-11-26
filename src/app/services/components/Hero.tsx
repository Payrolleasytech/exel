import { PageLayout } from '@/util/PageLayout'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


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
        <div className={`${PageLayout} ${isPrimary && 'bg-primary'} min-h-[50vh] h-auto  lg:max-h-[600px] py-20 items-center justify-between  w-full grid grid-cols-1 md:grid-cols-2 h-full gap-2 lg:gap-3 text-start`}>
            <div className={`flex flex-col gap-4 md:gap-8 justify-self-start ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
                <h1 className=' text-xl md:text-3xl font-bold'>{title}</h1>
                <p className='text-lg'>{description}</p>
                <div className='mt-4  md:mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-3'>
                    {/* <button className={`px-4 py-2 cursor-pointer rounded-lg ${!cta[0]?.isPrimary ? 'bg-white text-gray-900' : 'bg-primary text-white border'}`}>
                        {cta[0]?.label}
                    </button> */}
                   <Link href="/contact"
                    className={`w-full md:w-auto text-center rounded p-2 transition-all duration-300
    ${cta[0]?.isPrimary && title !== "Smart Payroll Software for Modern Businesses"
      ? "bg-primary text-white hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg"
      : title === "Smart Payroll Software for Modern Businesses" ? "border border-white" : "border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02]"
    }
  `}
>
  {cta[0]?.label}
</Link>


                    {
                        cta[1] && (
                           <Link
  href="/contact"
  className={`
    w-full md:w-auto text-center
    rounded p-2 transition-all duration-300
    ${cta[1]?.isPrimary && title !== "Smart Payroll Software for Modern Businesses"
      ? "bg-gray-500 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg"
      : title === "Smart Payroll Software for Modern Businesses" ? " bg-white text-primary" : "border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md hover:scale-[1.02]"
    }
  `}
>
  {cta[1]?.label}
</Link>


                        )
                    }
                </div>
            </div>
            <div className={`justify-self-end hover:shadow-lg`}>
                <Image src={image} alt={title} width={450} height={400} className='rounded-lg shadow-lg' />
            </div>
        </div>
    )
}
