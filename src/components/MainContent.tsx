
import { Card } from "./ui/Card"


import { toggleModal } from "../atoms"
import { useContent } from "../hooks/useContent"
import { Navbar } from "./Navbar"
export const MainContent= ()=>{
    const contents = useContent();
    console.log(contents)
    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 ">
            <Navbar/>

            <div className=" flex flex-wrap md:flex-row flex-col">
                {
                    
                    contents.map(({_id,type,link,text,title})=>
                        
                        <Card key={_id}
                        variant={type}
                         link={link} 
                         text={text} 
                         title={title}/>
                    )
                }
            </div>
        </div>
        </>
    )
}