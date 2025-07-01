import Image from 'next/image'
import React from 'react'


interface TestimonialsPlaceholderProps {
    src: string,
    quote: string,
    name: string,
    company: string
}

export default function TestimobnialsPlaceholder(props: TestimonialsPlaceholderProps) {
    return (
        <div 
        className='w-full max-w-sm h-80 mx-auto flex flex-col items-center justify-center gap-4 rounded-lg bg-white shadow-md p-3 md:p-6 transition-transform duration-300 hover:shadow-lg transform'
        >
            <Image
                src={props.src}
                alt={`Testimonial from ${props.name} of ${props.company}`}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full justify-self-center mt-8"
            />

            <q className="text-center">
                {props.quote}
            </q>

            <span className="flex flex-col items-center justify-center gap-2">
                <strong className="text-lg"> {props.name} </strong>
                <span className="text-sm text-gray-500"> {props.company} </span>
            </span>
        </div>
    )
}
