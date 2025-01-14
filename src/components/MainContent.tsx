
import { Card } from "./ui/Card"
import { useContent } from "../hooks/useContent"
import { showDeleteModal } from "../atoms"
import { Navbar } from "./Navbar"
import { useSetRecoilState } from "recoil"
import { activeIdForDeletion } from "../atoms"


export const MainContent= ()=>{

    const setDeleteModal = useSetRecoilState(showDeleteModal)
    const setActiveId = useSetRecoilState(activeIdForDeletion)
    const contents = useContent();

    const handleDeleteContent = (id:string)=>{
        setDeleteModal(val =>!val)
        setActiveId(id)
        console.log("BUtton clicked",id)
    }
    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 md:ml-80 ">
            <Navbar/>

            <div className=" flex flex-wrap md:flex-row flex-col">
                {
                    
                    contents.map(({_id,type,link,content,title,tags,createdAt})=>
                        
                        <Card key={_id}
                        variant={type}
                         link={link} 
                         content={content} 
                         title={title}
                         openDeleteModal={()=>handleDeleteContent(_id)}
                            tags = {tags}
                        createdAt={createdAt}
                         
                         />
                    )
                }
                
            </div>
        </div>
        </>
    )
}