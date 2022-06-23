import React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import {InteractionNav} from "../../../data/navbar";

type Props = {
    subMenu: InteractionNav[]
}

const SubNav: NextPage<Props> = ({subMenu}) => {
    return (
        <div className="group-hover:flex overflow-hidden origin-top group-hover:animate-marginDown hidden flex-col bg-gray-50 drop-shadow-lg border-l-4 border-l-gold top-16 absolute w-max h-fit">
            {subMenu.map((element, index) =>
                <Link key={index} href={!element.interaction ? "" : element.interaction.link}>
                    <a href={!element.interaction ? "" : element.interaction.link} className="cursor-pointer capitalize py-2.5 pl-2 pr-8 hover:bg-gray-200">{element.name}</a>
                </Link>
            )}
        </div>
    );
};

export default SubNav;