import React, {createContext, ReactNode, RefObject, useRef, useState} from 'react';
import {NextPage} from "next";

type ContextType = {
    navbarRef: RefObject<HTMLDivElement>
    footerRef: RefObject<HTMLDivElement>
    mainRef: RefObject<HTMLDivElement>
    navHeight: number | undefined
    footerHeight: number | undefined
    mainHeight: number | undefined
    setNavHeight: React.Dispatch<React.SetStateAction<number | undefined>>
    setFooterHeight: React.Dispatch<React.SetStateAction<number | undefined>>
    setMainHeight: React.Dispatch<React.SetStateAction<number | undefined>>
}

const layoutContext = createContext<undefined | ContextType>(undefined)

type Props = {
    children: ReactNode
}

export const LayoutContext: NextPage<Props> = ({children}) => {
    const navbarRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLDivElement>(null)
    const [navHeight, setNavHeight] = useState<undefined | number>(undefined)
    const [footerHeight, setFooterHeight] = useState<undefined | number>(undefined)
    const [mainHeight, setMainHeight] = useState<undefined | number>(undefined)

    const value = {navbarRef, footerRef, mainRef, navHeight, footerHeight, mainHeight, setNavHeight, setFooterHeight, setMainHeight}
    return (
        <layoutContext.Provider value={value}>
            {children}
        </layoutContext.Provider>
    );
};

export const useLayoutContext = () => {
    const context = React.useContext(layoutContext)
    if (context === undefined) {
        throw new Error('useLayoutContext must be used within a LayoutProvider')
    }
    return context
}
