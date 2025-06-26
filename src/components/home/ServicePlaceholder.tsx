import React from 'react'
import { ButtonExel } from '../ButtonExel';
import ItemLists from './ItemLists';


interface Services {
    title: string;
    description: string | React.ReactNode;
    ctaText: string;
    listItems: string[];
    ctaLink?: string;
    icon: React.ReactNode;
}
export default function ServicePlaceholder({title, description, ctaText, icon, listItems}: Services) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
            <div className="flex flex-col gap-4 md:gap-8">
                <h5 className=" font-bold text-2xl md:text-3xl mb-4">
                  {title}
                </h5>

                <div className='flex flex-col gap-2'>
                  {description}

                  <ItemLists items={listItems} />
                </div>
                <ButtonExel
                    className="mt-4"
                    variant="default"
                    text={ctaText}
                />
            </div>
            <div>
              {
                icon
              }
            </div>
    </section>
  )
}
