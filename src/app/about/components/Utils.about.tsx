import Image from "next/image"

export function SubTitle({title}: {title: string}) {
    return (
        <h3 className='text-primary text-lg font-bold text-center'>
            {title}
        </h3>
    )
}
export function Title({title}: {title: string}) {
    return (
        <h3 className='text-lg lg:text-4xl font-bold text-center'>
            {title}
        </h3>
    )
}

export function ExpertiseCard({score, description, src}: {score: number, description: string, src: string}) {
    return (
        <div className='border p-4 rounded-md flex gap-4 w-full'>
            <Image src={src} alt={description} width={48} height={48} className=''/>
            <div className='flex flex-col'>
                <span className='font-bold text-lg'>{score}{description === "Clients Served" ? "+" : "%"} </span>
                <span>{description}</span>
            </div>
        </div>
    )
}