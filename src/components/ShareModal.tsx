import { useSetRecoilState } from "recoil"
import { CloseIcon } from "../icons/CloseIcon"
import { showShareModal } from "../atoms"
import { Button } from "./ui/Button"
import { useState } from "react"
import axios from "axios"

import { CopyIcon } from "../icons/CopyIcon"
import { useAlert } from "../hooks/useAlert"
export const ShareModal = () =>{

    const showAlert = useAlert()
    const setShareModal = useSetRecoilState(showShareModal)
    const [isLoading,setIsLoading] = useState(false)
    const [hash,setHash] = useState("")
    
    const handleGeneratLink = async ()=>{
        try{

            setIsLoading(true)

            const response = await axios.post("https://secondbrain-backend-9trd.onrender.com/api/v1/brain/share",{
                share:true
            },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
    
    
            
            if(response.status===200)
                setHash(response.data.hash)
            
            setIsLoading(false)
        }catch(e){
            console.log("Could Not Generate Link")
            setIsLoading(false)

        }


    }
    const handleCopyLinkClick = () =>{
        navigator.clipboard.writeText(`https://second-brain-frontend-64sr.vercel.app/share/${hash}`)
        showAlert("contentLinkCopied",2000)
    }
    return(
        <>  

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center">

                <div className="w-96 h-64 bg-backgroundColor rounded-lg  border border-white border-opacity-40">
                <div className="flex justify-between p-2">
                <h1 className="font-montserrat font-extrabold text-2xl text-white">Share Your Notes</h1>
                    <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setShareModal(val =>!val)
                        
                    }}>
                        <CloseIcon variant="sm"/>
                    </div>
                </div>

                <div className="mt-2 p-4 ">
                    <Button variant="wide" size="wide" text="Generate Link" onClick={handleGeneratLink} isLoading={isLoading}/>
                </div>

                                        {
                        hash && (
                            <div className="p-4">
                            <div className="w-full h-12 bg-primaryColor text-white rounded-lg flex">
                                
                                <div 
                                className="w-[80vw] border border-white border-opacity-30 font-montserrat flex justify-center items-center overflow-hidden px-10 "
                                title={`http://localhost:5173/share/${hash}`}
                                >
                               https://second-brain-frontend-64sr.vercel.app/share/{hash}
                                </div>
                        
                                
                                <div onClick={handleCopyLinkClick}
                                 className="w-[20vw] border border-white border-opacity-30 hover:bg-primaryColor2 flex justify-center items-center">
                                    <CopyIcon variant="md"/>
                                </div>
                            </div>
                            </div>
                        )
                        }


                </div>
            </div>

        </>
    )
}