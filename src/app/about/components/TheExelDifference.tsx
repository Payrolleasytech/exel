import { PageLayout } from '@/util/PageLayout'
import React from 'react'
import { SubTitle, Title } from './Utils.about'
import { IoIosCheckmarkCircle } from "react-icons/io";


export default function TheExelDifference() {
 return (
     <section className={`${PageLayout} bg-[#F2F4F8] my-4 lg:my-16 py-4 lg:py-16 flex flex-col items-center justify-center`}> 
      <SubTitle title={'THE EXEL DIFFERENCE'} />
      <Title title={'Brokerage + Software. '} />
      <p className={'text-center max-w-2xl mt-4 mb-8'}>
        We offer both expert brokerage AND our own licensed payroll software. 
        This allows us to be completely objective in our recommendations while also innovating solutions that 
        push the entire industry forward.
      </p>
      <div className={'flex items-center flex-wrap justify-between mx-auto gap-2 lg:gap-4'}>
        <p className="flex items-center gap-1"> <IoIosCheckmarkCircle className='text-primary' /> HMRC approved  </p>
        <p className="flex items-center gap-1"> | </p>
        <p className="flex items-center gap-1"> <IoIosCheckmarkCircle className='text-primary' /> Data Protected</p>
        <p className="flex items-center gap-1"> | </p>
        <p className="flex items-center gap-1"> <IoIosCheckmarkCircle className='text-primary' /> Fully Licensed</p>
        <p className="flex items-center gap-1"> | </p>
        <p className="flex items-center gap-1"> <IoIosCheckmarkCircle className='text-primary' /> Industry Partners</p>
      </div>
     </section>
   )
}
