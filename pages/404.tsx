import React, {useEffect, useRef} from 'react';
import Link from "next/link";
import {useLayoutContext} from "../contexts/layout-context";
import Head from "next/head";


const Custom404 = () => {
    const mainRef = useRef<HTMLDivElement>(null)
    const {mainHeight} = useLayoutContext()
    useEffect(() => {
        if(mainRef.current !== null && mainHeight !== undefined){
            mainRef.current.style.height = `${mainHeight}px`
        }
    }, [mainHeight])

    return (
        <main ref={mainRef} id={"main"} className="transition-all p-8 text-center my-auto flex flex-col justify-center items-center gap-8">
            <Head>
                <title>Page Not Found - Oshot UK</title>
                <meta name="robots" content="noindex, follow"/>
            </Head>
            <h1 className="text-6xl text-red-700">404</h1>
            <span className="text-xl">
                We are sorry, but the page you&apos;re looking for
                does not exist.
            </span>
            <Link href="/">
                <a className="xls:w-1/4 p-4 border-2 border-black rounded-lg w-1/2 hover:bg-gold shadow-lg hover:text-white transition duration-200">Home</a>
            </Link>
        </main>
    );
};

export default Custom404;