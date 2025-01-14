import { BrainIcon } from "../../icons/BrainIcon"

import { SidebarOption } from "../SidebarOptions"

interface sidebarProps{
    size:"md" | "lg",
    
}

const sizeStyles = {
    "md":" w-48",
    "lg":" min-w-80"
}


export const Sidebar = (props:sidebarProps)=>{
    return(
        <>
        <div className={`h-screen hidden md:block ${sizeStyles[props.size]} bg-[#1a2439] fixed `}>
            <div className="flex mt-4 p-2">
            <BrainIcon variant="lg"/>
            <div className="font-satoshi tracking-tighter text-white font-black text-2xl pl-2">
                xv Brainly
            </div>
        </div>

            <SidebarOption/>
        </div>
        </>
    )
}