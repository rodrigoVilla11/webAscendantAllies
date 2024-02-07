"use client"
import Image from "next/image";
import { useWidth } from "@/hooks/useWidth";
import { useState } from "react";

export default function Nav(){
    const width = useWidth();
    const isMobile = width < 769;
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
    const handleMenu = () => {
        setToggleMenuMobile(!toggleMenuMobile)
    }
    return(<>
        <nav className="fixed w-full h-20  flex justify-between pt-2 pb-2 bg-white bg-opacity-90 z-50">
            <div className="flex w-full justify-center md:justify-start items-center space-x-0 md:ml-10">
                <div className="px-4">
                <Image className="" src="/assets/Logo_AscendantAllies_no_background.png" alt="logo_AscendantAllies" width="40" height="20"/>
                </div>
                <h1 className="text-2xl md:text-3xl font-primary text-violetDawn ">ASCENDANT <span className="text-black">ALLIES</span></h1> 
                {isMobile && <button className="w-10 h-16 text-3xl" onClick={handleMenu}>+</button>}
            </div>
           
            <div className="w-full hidden md:flex justify-center items-center">
                <ul className="flex justify-center items-center space-x-4">
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">INICIO</li>
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">SERVICIOS</li>
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">NOSOTROS</li>
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">CONTACTO</li>
                </ul>
            </div> 
            
        </nav>
        {toggleMenuMobile && 
                <div className="w-full h-auto flex justify-center items-center pt-24  bg-white bg-opacity-90 border-b-2 border-violetDawn pb-6 absolute z-40">
                <ul className="flex flex-col justify-center items-center space-y-6 ">
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">INICIO</li>
                    
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">SERVICIOS</li>
                    
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black">NOSOTROS</li>
                    
                    <li className="text-2xl font-primary text-violetDawn hover:cursor-pointer hover:text-black ">CONTACTO</li>
                </ul>
            </div>
            }</>
    )
}