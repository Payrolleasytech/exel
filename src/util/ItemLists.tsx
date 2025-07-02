import React from 'react'
import { TiTick } from 'react-icons/ti';

interface ItemListsProps {
    items: string[];
}
export default function ItemLists({ items }: ItemListsProps) {
    return (
        <ul className="list-none flex flex-col gap-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                    <Ticks />
                    {item}
                </li>
            ))}
        </ul>
    )
}


export const Ticks = () => {

    return <span className="bg-primary rounded-full p-2"> <TiTick className='text-white' />
    </span>
}
