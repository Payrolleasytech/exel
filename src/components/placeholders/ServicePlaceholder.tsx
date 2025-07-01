import React from 'react'
import { ButtonExel } from '../ButtonExel';
import ItemLists from '../home/ItemLists';

interface Services {
  title: string;
  description: string | React.ReactNode;
  ctaText: string;
  listItems: string[];
  ctaLink?: string;
  icon: React.ReactNode;
}

export default function ServicePlaceholder({ title, description, ctaText, icon, listItems }: Services) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto my-8 md:my-16">
      <div className="flex flex-col gap-4 md:gap-8">
        <h5 className="font-bold text-2xl md:text-3xl">
          {title}
        </h5>

        <div className='flex flex-col gap-2'>
          {description}
          <ItemLists items={listItems} />
        </div>
        
        <div className="mt-4 hidden md:block">
          <ButtonExel
            variant="default"
            text={ctaText}
          />
        </div>
      </div>
      
      <div className="h-full flex flex-col justify-end gap-4">
        {icon}
        
        <div className="mt-4 block md:hidden w-full">
          <ButtonExel
            variant="default"
            text={ctaText}
            className='w-full'
          />
        </div>
      </div>
    </section>
  )
}