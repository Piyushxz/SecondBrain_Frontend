
import { Card } from "./ui/Card"


import { toggleModal } from "../atoms"
import { Navbar } from "./Navbar"
export const MainContent= ()=>{

    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 ">
            <Navbar/>

            <div className=" flex flex-wrap md:flex-row flex-col">
                <Card variant="links"/>
                
            </div>
        </div>
        </>
    )
}