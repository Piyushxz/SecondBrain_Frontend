
import { Card } from "./ui/Card"


import { toggleModal } from "../atoms"
import { Navbar } from "./Navbar"
export const MainContent= ()=>{

    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 ">
            <Navbar/>

            <div className=" flex flex-wrap md:flex-row flex-col">
                <Card variant="links" title="Links" link=""/>
                <Card variant="youtube"  title="Youtube" link="https://www.youtube.com/watch?v=_ZsZ4-HyjCg"/>
                <Card variant="tweets" title="Tweet" link="https://x.com/kirat_tw/status/1862917945762120010?s=46&t=mQj74bG83n01Qu4CqzSUHA"/>
                
            </div>
        </div>
        </>
    )
}