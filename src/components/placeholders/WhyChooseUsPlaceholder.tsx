import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


interface WhyChooseUsProps {
    title: string;
    description: string | React.ReactNode;
    ctaText: string;
    ctaLink?: string;
    icon: string;
}
export default function WhyChooseUsPlaceholder(props: WhyChooseUsProps) {
    return (
        <div className='flex flex-col gap-4 items-center justify-center w-full'>
            <Image
                src={props.icon}
                alt="Why Choose Us Icon"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full justify-self-center mt-8"
            />
            <h5 className="font-bold text-2xl md:text-3xl text-center">
                {props.title}
            </h5>
            <p className="text-[#121619] md:text-lg text-center">

                {props.description}
            </p>
            <a href={props.ctaLink} className="btn flex items-center hover:text-primary transition-all ease-in justify-center w-full gap-2 cursor-pointer text-blue-400">
                {props.ctaText}
                <span className="material-icons"> <FaArrowRight /></span>
            </a>
        </div>
    )
}
