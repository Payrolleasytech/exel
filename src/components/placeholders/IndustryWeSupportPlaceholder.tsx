import React from 'react'


interface IndustryWeSupportPlaceholderProps {
    icon: React.ReactElement;
    industry: string;
    description: string
}
export default function IndustryWeSupportPlaceholder(props: IndustryWeSupportPlaceholderProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow p-4 md:p-6 w-full max-w-xs h-64 border">
        <span className="text-primary text-4xl ">
            {React.cloneElement(props.icon)}
        </span>

        <h5 className=" font-semibold text-primary">
            {props.industry}
        </h5>
        <p className="text-[#21272A]"> 
            {props.description}
        </p>

    </div>
  )
}
