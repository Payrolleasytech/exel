import React from 'react'
import Marquee from "react-fast-marquee" 
import IndustryWeSupportPlaceholder from '@/components/placeholders/IndustryWeSupportPlaceholder'
import { IndustryWeSupportDetails } from './data/IndustryWeSupportDetails';

export default function IndustryWeSupportMarque() {
  return (
    <div className='overflow-x-clip'>
      <Marquee speed={100} delay={0} pauseOnHover>
        {IndustryWeSupportDetails.map((industry, key) => (
          <div key={key} className='mx-2'>
            <IndustryWeSupportPlaceholder icon={<industry.icon />} industry={industry.industry} description={industry.description} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

