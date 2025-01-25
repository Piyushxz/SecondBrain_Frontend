
import { Card } from "./ui/Card"
import { useContent } from "../hooks/useContent"
import { showDeleteModal } from "../atoms"
import { Navbar } from "./Navbar"
import { useSetRecoilState } from "recoil"
import { activeIdForDeletion } from "../atoms"
import { AISearch } from "./AISearch"


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

            <div className="flex flex-col  justify-center items-center mt-4">
            <AISearch/>
            <div className="grid grid-cols-12 md:w-[70vw] w-[80vw] mt-4 gap-4">
                <div className="md:col-span-9 col-span-12 ">
                    <div className="border border-white rounded-2xl w-full h-40 border-opacity-30">

                    </div>
                </div>
                <div className="md:col-span-3 col-span-12 ">
                    <div className="px-4 h-24 border border-white rounded-lg">

                    </div>
                </div>
            </div>
            </div>
            

                <div className="flex flex-col mt-10 ">
                    <div className="px-4">
                        <h1 className="font-satoshi tracking-tighter font-extrabold text-4xl text-white">Your Brain,</h1>
                    </div>

                <div className=" flex flex-wrap md:flex-row flex-col ">
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

        </div>
        </>
    )
}