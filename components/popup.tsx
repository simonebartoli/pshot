import React, {useEffect, useState} from 'react';
import {BsTelephonePlus} from "react-icons/bs";

const Popup = () => {
    return (
        <div className="cursor-pointer animate-bouncing delay-[2000ms] bg-black border-[1px] border-white shadow-lg p-4 rounded-full fixed right-[2.5%] sm:bottom-[5%] bottom-[2.5%]">
            <BsTelephonePlus className="text-gold text-3xl"/>
        </div>
    );
};

export default Popup;