import { BrainIcon } from "../../icons/BrainIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"

interface sidebarProps{
    size:"md" | "lg",
    
}

const sizeStyles = {
    "md":" w-48",
    "lg":" w-80"
}


export const Sidebar = (props:sidebarProps)=>{
    return(
        <>
        <div className={`h-screen ${sizeStyles[props.size]} bg-[#1a2439]  `}>
            <div className="flex mt-4 p-2">
            <BrainIcon variant="lg"/>
            <div className="font-montserrat text-white font-black text-2xl pl-2">
                Second Brain
            </div>
        </div>

            <div className="mt-10">
                <ul>
                    <li>
                        <div className="flex  pl-4">
                            <TwitterIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Tweets</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}