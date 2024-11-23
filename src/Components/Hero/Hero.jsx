import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero() {
    return (
        <div className="overflow-x-hidden top-0" >
            <Carousel className="w-full h-full">
            <CarouselContent>
                    <CarouselItem>
                        <section className="relative w-full h-screen overflow-hidden">
                            {/* Background Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            >
                                <source src="/images/city.mp4" type="video/mp4"  />
                                Your browser does not support the video tag.
                            </video>

                            {/* Content */}
                            <div className="flex items-center transform text-white h-full px-40">
                                <div>
                                <h1 className="text-4xl md:text-8xl mb-4">Get Familiar with Website</h1>
                                <h1 className="text-4xl md:text-8xl mb-4">Digital Marketing</h1>
                                <p className="text-xl md:text-3xl">Your tagline or content goes here Lorem ipsum dolor sit amet..</p>
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
                    <CarouselItem>
                        <section className="relative w-full h-screen overflow-hidden">
                            {/* Background Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            >
                                <source src="/images/tech.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Content */}
                            <div className="flex items-center transform text-black h-full px-40">
                                <div>
                                <h1 className="text-4xl md:text-8xl mb-4">Get Familiar with Website</h1>
                                <h1 className="text-4xl md:text-8xl mb-4">Digital Marketing</h1>
                                <p className="text-xl md:text-3xl">Your tagline or content goes here Lorem ipsum dolor sit amet..</p>
                                </div>
                            </div>
                        </section>
                    </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
    )
}
