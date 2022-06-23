import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import {AiOutlineCaretDown} from "react-icons/ai";
import Link from "next/link";
import {BsTelephoneInbound} from "react-icons/bs";
import {NavElements} from "../../../data/navbar";

type Props = {
    navElement: NavElements
    closeNav: boolean | null
    closeNavFunction: () => void
}

const MobileNavElements: NextPage<Props> = ({navElement, closeNav, closeNavFunction}) => {
    const [toggle, setToggle] = useState<null | boolean>(null)

    const switchToggle = () => {
        if(toggle === null) setToggle(true)
        else setToggle(!toggle)
        const rem = 16 //rem in px
        const heightAnimation = !navElement.subMenu ? 1 : navElement.subMenu.length * (2*rem + 1.5*rem) // line height + padding
        document.documentElement.style.setProperty("--maxHeight", `${heightAnimation}px`)
    }

    useEffect(() => {
        if(closeNav === true){
            if(toggle === true) setToggle(false)
        }
    }, [closeNav])

    return (
        <>
            {navElement.subMenu === false ?
                <div className="w-full text-center">
                    {
                        navElement.type === "standard" ?
                            <Link href={!navElement.interaction ? "" : navElement.interaction.link}>
                                <a href={!navElement.interaction ? "" : navElement.interaction.link} className="inline-block transition duration-300 hover:bg-gray-300 hover:text-gold hover:font-semibold py-4 w-full uppercase cursor-pointer"
                                   onClick={closeNavFunction}>{navElement.name}</a>
                            </Link>
                            :
                        navElement.type === "separator" ?
                            <span className="block m-auto my-4 w-5/6 h-full pt-[1px] bg-neutral-500"/>
                            :
                        navElement.type === "phone" ?
                            <Link href={!navElement.interaction ? "" : navElement.interaction.link}>
                                <div className="flex flex-row gap-4 items-center justify-center py-6 w-full cursor-pointer transition duration-300 hover:bg-gray-300 group text-xl">
                                    <BsTelephoneInbound className="text-gold group-hover:text-purple duration-300"/>
                                    <a href={!navElement.interaction ? "" : navElement.interaction.link} className="transition-all duration-300 text-gold duration-300 group-hover:text-purple group-hover:font-semibold uppercase"
                                       >{navElement.name}</a>
                                </div>
                            </Link>
                            :
                            ""
                    }
                </div>

                :
                <div className="flex flex-col w-full text-center">
                    <div className="flex flex-row items-center justify-center gap-2 w-full" onClick={switchToggle}>
                        <div className="py-4"><span className="uppercase">{navElement.name}</span></div>
                        <AiOutlineCaretDown className={toggle === true ? "animate-rotate": toggle === false ? "animate-rotateOpposite" : ""}/>
                    </div>

                    <div id={`${navElement.name}-nav`} className={`${toggle === true ? "animate-slideInDown" : toggle === false ? "animate-slideOutUp": "hidden"} overflow-hidden flex-col bg-gray-200`}>
                        {navElement.subMenu.map((subElement, indexJ) =>
                            <div key={indexJ} className="hover:bg-gray-300 hover:text-gold hover:font-semibold transition duration-300">
                                <Link href={!subElement.interaction ? "" : subElement.interaction.link}>
                                    <a className="inline-block w-full py-4 uppercase cursor-pointer"
                                       onClick={closeNavFunction}>{subElement.name}</a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default MobileNavElements;