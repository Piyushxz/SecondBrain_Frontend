import { useSetRecoilState } from "recoil"
import { CloseIcon } from "../icons/CloseIcon"
import { showShareModal } from "../atoms"
import { Button } from "./ui/Button"
import { useState } from "react"
import axios from "axios"
export const ShareModal = () =>{

    const setShareModal = useSetRecoilState(showShareModal)
    const [isLoading,setIsLoading] = useState(false)

    const handleGeneratLink = async ()=>{
        setIsLoading(true)

        const response = await axios.post("http://localhost:3003/api/v1/brain/share",{
            share:true
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })

        console.log(response)

        setIsLoading(false)

    }
    return(
        <>  

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center">

                <div className="w-96 h-64 bg-backgroundColor rounded-lg mt-10 border border-white border-opacity-40">
                <div className="flex justify-between p-2">
                <h1 className="font-montserrat font-extrabold text-2xl text-white">Share Your Notes</h1>
                    <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setShareModal(val =>!val)}}>
                        <CloseIcon variant="sm"/>
                    </div>
                </div>

                <div className="mt-2 p-4 ">
                    <Button variant="wide" size="wide" text="Generate Link" onClick={handleGeneratLink} isLoading={isLoading}/>
                </div>

                <div className="p-4 ">
                    <div className="w-full  h-12 bg-primaryColor text-white rounded-lg flex ">
                        <div className="w-[80vw] border border-white border-opacity-30  ">

                        </div>
                        <div className="w-[20vw] border border-white border-opacity-30  hover:bg-primaryColor2">

                        </div>
                    </div>

                </div>

                </div>
            </div>

        </>
    )
}