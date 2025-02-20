
import { Card } from "./ui/Card"
import { useContent } from "../hooks/useContent"
import {  queryLoading, queryResponse, showDeleteModal } from "../atoms"
import { Navbar } from "./Navbar"
import {  useRecoilValue, useSetRecoilState } from "recoil"
import { activeIdForDeletion } from "../atoms"
import { AISearch } from "./AISearch"
import { SearchResultSkeleton } from "./SearchResultSkeleton"
import { SearchResult } from "./SearchResult"


export const MainContent= ()=>{

    const isLoading = useRecoilValue(queryLoading)
    const response = useRecoilValue(queryResponse)
    console.log(isLoading)
    const setDeleteModal = useSetRecoilState(showDeleteModal)
    const setActiveId = useSetRecoilState(activeIdForDeletion)

    const {content,username} = useContent();

    const handleDeleteContent = (id:string)=>{
        setDeleteModal(val =>!val)
        setActiveId(id)
        console.log("BUtton clicked",id)
    }
    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 md:ml-80 ">
            <Navbar username = {username}/>

            <div className="flex flex-col  justify-center items-center mt-4">
            <AISearch/>
            {
            isLoading ? (
                <SearchResultSkeleton />
            ) : response ? (
                <SearchResult />
            ) : (
                <div className="w-[70vw] h-48"></div>
            )
}
          
            </div>
            

                <div className="flex flex-col mt-10 ">
                    <div className="px-4">
                        <h1 className="font-satoshi tracking-tighter font-extrabold text-4xl text-white">Your Brain,</h1>
                    </div>

                <div className=" flex flex-wrap md:flex-row flex-col ">
                {
                    
                    content.map(({_id,type,link,content,title,tags,createdAt})=>
                        
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