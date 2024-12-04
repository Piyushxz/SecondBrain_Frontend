
import { Card } from "./ui/Card"
import { toggleModal } from "../atoms"
import { useContent } from "../hooks/useContent"
import { showDeleteModal } from "../atoms"
import { Navbar } from "./Navbar"
import { useSetRecoilState } from "recoil"
export const MainContent= ()=>{

    const setDeleteModal = useSetRecoilState(showDeleteModal)

    const contents = useContent();
    console.log(contents)

    const handleDeleteContent = (id:string)=>{
        setDeleteModal(val =>!val)
        console.log("BUtton clicked",id)
    }
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
                         title={title}
                         openDeleteModal={()=>handleDeleteContent(_id)}
                         />
                    )
                }
            </div>
        </div>
        </>
    )
}