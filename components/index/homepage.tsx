import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import HomePageImage from "../../public/media/photos/index/for him.jpg"
// import ConceptImage from "../../public/media/photos/oconcept.png"

import {useResizer} from "../../contexts/resizer-context";
import {useLayoutContext} from "../../contexts/layout-context";

const Homepage = () => {
    const fullPageRef = useRef<HTMLDivElement>(null)
    const {heightPage} = useResizer()
    const {navHeight} = useLayoutContext()

    useEffect(() => {
        if(fullPageRef.current !== null && navHeight !== undefined){
            fullPageRef.current.style.minHeight = `${heightPage - navHeight}px`
        }
    }, [heightPage, navHeight])

    return (
        <section ref={fullPageRef} className="relative w-full home-container flex flex-col items-center justify-around">
            <div className="w-full h-full absolute homepage-image">
                <Image alt="Homepage Image" placeholder="blur" priority={true} src={HomePageImage} objectPosition={"left"} layout="fill" objectFit="cover"/>
            </div>
            <div className="p-4">
                {/*<Image alt="O-Concept Logo" src={ConceptImage}/>*/}
            </div>
            <div className="z-10 flex flex-col items-center gap-8 p-8 sm:px-16 px-8 bg-[rgba(0,0,0,0.7)]  rounded-lg">
                <h1 className="text-gold-light sm:text-8xl smxl:text-7xl smx:text-6xl text-5xl  text-center leading-[5rem]">THE P-SHOT</h1>
                <div>
                    <span className="text-gold-light sm:text-4xl smxl:text-3xl smxl:inline-block block py-1 text-2xl text-center">By Award Winner&nbsp;</span>
                    <span className="text-gold-light sm:text-4xl smxl:text-3xl smxl:inline-block block py-1 text-2xl text-center font-semibold underline underline-offset-8">Dr. Sherif Wakil</span>
                </div>
            </div>
        </section>
    );
};

export default Homepage;