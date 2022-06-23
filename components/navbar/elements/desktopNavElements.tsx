import React from 'react';
import {NextPage} from "next";
import SubNav from "./subnav";
import Link from "next/link";
import {BsTelephoneInbound} from "react-icons/bs";
import {NavElements} from "../../../data/navbar";

type Props = {
    navElement: NavElements
}

const DesktopNavElements: NextPage<Props> = ({navElement}) => {
    return (
        <>
            {   navElement.subMenu === false ?
                    <div>
                        {navElement.type === "standard" ?
                            <Link href={!navElement.interaction ? "" : navElement.interaction.link}>
                                <a ref={!navElement.interaction ? "" : navElement.interaction.link} className="uppercase cursor-pointer py-6 hover:text-gold transition duration-300">{navElement.name}</a>
                            </Link>
                            :
                        navElement.type === "separator" ?
                            <span className="h-full pl-[1px] bg-neutral-500"/>
                            :
                        navElement.type === "phone" ?
                                <Link href={!navElement.interaction ? "" : navElement.interaction.link}>
                                    <div className="flex flex-row gap-2 items-center rounded-lg py-3 text-lg transition-all group">
                                        <BsTelephoneInbound className="text-gold group-hover:text-purple duration-300"/>
                                        <a href={!navElement.interaction ? "" : navElement.interaction.link} className="uppercase font-semibold cursor-pointer text-gold group-hover:text-purple duration-300">{navElement.name}</a>
                                    </div>
                                </Link>
                            :
                            ""
                        }
                    </div>
                :
                    <div className="relative flex flex-col group">
                        <span className="uppercase py-6 group-hover:text-gold transition duration-300">{navElement.name}</span>
                        <SubNav subMenu={navElement.subMenu}/>
                    </div>
            }
        </>
    );
};

export default DesktopNavElements;