"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { TestimonialsDetails } from './data/TestimonialsDetails'
import TestimobnialsPlaceholder from '@/components/placeholders/TestimobnialsPlaceholder'
import { CarouselPagination } from './CarouselPagination'


export default function TestimonialCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])



    return (
        // <div className="h-full w-full p-2 mx-auto">
           <section className="grid gap-10 w-full md:px-20 overflow-hidden mx-a">

       <div className="h-full w-full max-w-full overflow-hidden p-2 md:p-8 mx-auto">
        

            <Carousel
                setApi={setApi}
                opts={{ loop: true , align: "center"}}
                plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]}
                className=" "
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {
                        TestimonialsDetails.map((detail, index) => {
                            return (
                                <CarouselItem key={index}
                                    className="basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 group rounded-lg cursor-pointer"


                                >
                                    <TestimobnialsPlaceholder src={detail.src} quote={detail.quote} name={detail.name} company={detail.company} />
                                </CarouselItem>
                            )
                        })
                    }


                </CarouselContent>
                <CarouselPrevious className={`hidden md:block`} />
                <CarouselNext className={`hidden md:block`} />
                <CarouselPagination current={current} count={count} />
            </Carousel>
        </div>
           </section>
    )
}
