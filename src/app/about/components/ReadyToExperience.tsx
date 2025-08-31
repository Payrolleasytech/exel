 
import { ButtonExel } from '@/components/ButtonExel';
import React from 'react';

export default function ReadyToExperience() {
  return (
    <section className={`px-4 md:px-8 xl:px-14 2xl:px-20 py-6 lg:py-16 flex flex-col items-center justify-center  bg-primary `}>

      <h3 className='text-lg lg:text-4xl font-bold text-center text-white'>
        Ready to Experience the Exel Difference?
      </h3>

      <p className={'text-white text-center mt-4 max-w-2xl mx-auto'}>
        Join hundreds of UK businesses who&apos;ve transformed their payroll and finance operations with our expert guidance. 
        Your free consultation is just one click away.
        </p>

      <ButtonExel className='mt-8' text='Book Free Consultation' variant={'form'} size={'lg'}/>
    </section>
  )
}
