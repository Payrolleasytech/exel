import { ButtonExel } from '@/components/ButtonExel';
import Link from 'next/link';
import React from 'react'


interface TakeActionCardProps {
  title?: string;
  description?: string;
  cta?: {
    text: string;
    link: string;
    isPrimary?: boolean;
  };
}

export default function TakeActionCard({ title, description, cta }: TakeActionCardProps) {
  return (
    <div className={`px-4 md:px-8 xl:px-14 2xl:px-20 py-4 md:py-10 bg-primary text-white text-center grid gap-3 md:gap-6`}>
      <h3 className='font-bold text-2xl'>{title}</h3>
      <p>{description}</p>
      <span className="max-w-md mx-auto">
        {/* <ButtonExel variant={`form`} title={cta?.text} text={cta?.text} className='' /> */}
        <Link href={"/contact"} className=' flex items-center gap-1 border border-primary p-2 rounded text-primary font-semibold mt-2 cursor-pointer'>
                {cta?.text}
                </Link>
      </span>
     
    </div>
  )
}
