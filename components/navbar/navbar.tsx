import React, {useEffect, useState} from 'react';
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
import Link from "next/link";
import {useResizer} from "../../contexts/resizer-context";
import {useLayoutContext} from "../../contexts/layout-context";
import Image from "next/image"
import {navElements} from "../../data/navbar";
import Logo from "../../public/media/photos/logo.svg"

const Navbar = () => {
    const {widthPage, heightPage} = useResizer()
    const {navbarRef, setNavHeight} = useLayoutContext()
    const [showDesktop, setShowDesktop] = useState(false)

    useEffect(() => {
        if(widthPage > 1152) setShowDesktop(true)
        else setShowDesktop(false)

        if(navbarRef.current !== null){
            setNavHeight(navbarRef.current.clientHeight)
        }
    }, [widthPage, heightPage])



    return (
        <nav ref={navbarRef} className="sticky z-40 top-0 left-0 flex flex-row justify-between items-center bg-white drop-shadow-xl w-full px-4 xls:py-0 py-6">
            <div className="xls:basis-1/12 md:basis-[15%] sm:basis-1/6 basis-[25%] cursor-pointer">
                <Link href={"/"}>
                    <div className="flex flex-col items-center justify-center">
                        <Image src={Logo} alt="Oshot Logo"/>
                    </div>
                </Link>
            </div>
            {showDesktop ?
                <DesktopNav navElements={navElements}/>
                :
                <MobileNav navElements={navElements}/>
            }
        </nav>
    );
};

export default Navbar;