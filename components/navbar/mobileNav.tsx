import React, {useEffect, useState} from 'react';
import {AiOutlineBars} from "react-icons/ai";
import {NextPage} from "next";
import MobileNavElements from "./elements/mobileNavElements";
import {useLayoutContext} from "../../contexts/layout-context";
import {NavElements} from "../../data/navbar";

type Props = {
    navElements: NavElements[]
}
// RSC
const MobileNav: NextPage<Props> = ({navElements}) => {
    const {navHeight} = useLayoutContext()
    const [toggle, setToggle]: any = useState(null)
    const [closeNav, setCloseNav] = useState<null | boolean>(null)

    useEffect(() => {
        if(navHeight !== undefined){
            document.getElementById("nav-mobile")!.style.top = `${navHeight}px`
        }
    }, [navHeight])
    const switchToggle = () => {
        const rem = 16 //rem in px
        const heightAnimation = navElements.length * (2*rem + 1.5*rem) // line height + padding
        document.documentElement.style.setProperty("--maxHeight", `${heightAnimation}px`)

        if(closeNav === null) setCloseNav(false)
        else setCloseNav(!closeNav)
        if(toggle === null) setToggle(true)
        else setToggle(!toggle)
    }


    return (
        <div className="xls:hidden flex flex-col">
            <AiOutlineBars className="text-2xl hover:text-gold transition duration-300" onClick={switchToggle}/>
            <div id={"nav-mobile"} className={`
            absolute left-0 flex-col justify-center overflow-hidden 
            items-center w-full drop-shadow-md bg-gray-100 ${toggle === true ? "flex animate-slideInDown": toggle === false ? "animate-slideOutUp" : "hidden"}`}>
                {navElements.map((element, index) => {
                    return(
                        <MobileNavElements
                            key={index} navElement={element}
                            closeNav={closeNav} closeNavFunction={switchToggle}
                        />
                    )
                })}
            </div>
        </div>
    );
};
export default MobileNav;