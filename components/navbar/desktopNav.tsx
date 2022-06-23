import React from 'react';
import {NextPage} from "next";
import DesktopNavElements from "./elements/desktopNavElements";
import {NavElements} from "../../data/navbar";
type Props = {
    navElements: NavElements[]
}

const DesktopNav: NextPage<Props> = ({navElements}) => {

    return (
        <div className="xls:flex hidden justify-between items-center gap-8 px-4 xl:text-base xls:text-sm">
            {
                navElements.map((element, index) =>
                    <DesktopNavElements key={index} navElement={element} />
                )
            }
        </div>
    );
};

export default DesktopNav;