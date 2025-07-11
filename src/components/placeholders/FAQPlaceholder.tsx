import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQDetails } from '@/util/data/FAQDetail';

export default function FAQPlaceholder() {
  return (
    <Accordion type="single" collapsible className=''>
      {FAQDetails.slice(0,4).map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className='border rounded-lg p-2 my-2 md:my-3 shadow data-[state=open]:border-primary'>
          <AccordionTrigger className="font-bold md:text-xl cursor-pointer">{faq.question}</AccordionTrigger>
        <AccordionContent className='font-display'>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
