"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react"


interface CustomAccordionProps {
title: string;
content: string;
}

interface data {
  data: CustomAccordionProps[];
}
export default function CustomAccordion({ data }: data) {
  return (
    <Accordion type="single" collapsible className="w-full pb-2 grid gap-4 my-8 lg:my-16">
     {
       data.map((item, index) => (
         <AccordionItem key={index} value={`item-${index}`} className="w-full border rounded-md px-4 bg-white max-w-2xl mx-auto ">
           <AccordionTrigger className="w-full group flex items-center justify-between [&>svg]:hidden cursor-pointer">
             <span>{item.title}</span>

             {/* Transition wrapper */}
             <span className="ml-2 inline-flex items-center transition-all duration-300 ease-in-out">
               {/* Plus shows when closed */}
               <Plus
                 className="h-5 w-5 group-data-[state=open]:opacity-0 group-data-[state=open]:-rotate-90 transition-all duration-300 ease-in-out"
                 aria-hidden
               />
               {/* Minus shows when open */}
               <Minus
                 className="h-5 w-5 opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0 -rotate-90 transition-all duration-300 ease-in-out absolute"
                 aria-hidden
               />
             </span>
           </AccordionTrigger>

           <AccordionContent className="transition-all duration-300 ease-in-out w-full">
             {item.content}
           </AccordionContent>
         </AccordionItem>
       ))
     }
    </Accordion>
  )
}
