import React, {useEffect} from 'react';
import {MdOutlineAlternateEmail} from "react-icons/md";
import {BsGeoAltFill, BsTelephoneInbound} from "react-icons/bs";
import Link from "next/link";
import {useLayoutContext} from "../../contexts/layout-context";
import {useResizer} from "../../contexts/resizer-context";

const Footer = () => {
    const {footerRef, setFooterHeight} = useLayoutContext()
    const {widthPage, heightPage} = useResizer()

    useEffect(() => {
        if(footerRef.current !== null){
            setFooterHeight(footerRef.current.clientHeight)
        }
    }, [widthPage, heightPage])

    return (
        <footer ref={footerRef} className="flex justify-center p-4 w-full bg-black min-h-max text-stone-200">
            <div className="flex md:flex-row flex-col justify-evenly xls:w-11/12">
                <div className="flex flex-col p-4 justify-between basis-2/5 md:gap-0 gap-4">
                    <span className="text-2xl uppercase">pshot uk</span>
                    <div className="flex flex-col gap-4">
                        <div>
                            <span>More Info on: <a rel={"noreferrer"} target="_blank" className="hover:text-gold transition duration-200" href="https://drswclinics.com">drswclinics.com</a></span>
                            <span> | </span>
                            <Link href={"/privacy"}>
                                <a href={"/privacy"} className="hover:text-gold transition duration-200">Privacy</a>
                            </Link>
                        </div>
                        <span>Treatment Provided By Dr SW Clinics | All Right Reserved &reg;</span>
                    </div>
                </div>
                <div className="flex flex-col p-4 gap-4 basis-3/5">
                    <span className="text-xl">Contact Us:</span>
                    <div className="flex md:flex-row flex-col md:items-center justify-between gap-12 md:gap-0">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-gold transition duration-200">
                                <MdOutlineAlternateEmail/>
                                <a href={"mailto: info@drswclinics.com"}>info@drswclinics.com</a>
                            </div>
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-gold transition duration-200">
                                <BsGeoAltFill/>
                                <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Dr+SW+Plastic+Surgery+London/@51.519817,-0.147625,17z/data=!4m5!3m4!1s0x0:0x8943ef774b03be2a!8m2!3d51.519817!4d-0.147625?hl=en">77 Harley Street London W1G 8QN </a>
                            </div>
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-gold transition duration-200">
                                <BsTelephoneInbound/>
                                <a href={"tel: 020 3006 8459"}>020 3006 8459</a>
                            </div>
                        </div>
                        <div className="text-center basis-3/5">
                            <span className="capitalize font-semibold italic text-xl leading-10">“O Concept™ for him:<br/> Its NOT abut your Sexual illness… <br/>its about your Sexual Wellness….”</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;