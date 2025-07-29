import { getInitials } from '@/util/UserInitials'
// import Image from 'next/image'
import React from 'react'


interface TestimonialsPlaceholderProps {
    id: number,
    avatar: string,
    content: string,
    name: string,
    role: string
}

export default function TestimobnialsPlaceholder(props: TestimonialsPlaceholderProps) {
    return (
        <div 
        className='w-full max-w-sm h-80 mx-auto flex flex-col items-center justify-center gap-4 rounded-lg bg-white shadow p-3 md:p-6 transition-transform duration-300 hover:shadow-lg transform'
        >
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center">
                {getInitials(props.name)}
            </div>

            <q className="text-center text-sm">
                {props.content}
            </q>

            <span className="flex flex-col items-center justify-center gap-2">
                <strong className="text-lg"> {props.name} </strong>
                <span className="text-sm text-gray-500"> {props.role} </span>
            </span>
        </div>
    )
}
