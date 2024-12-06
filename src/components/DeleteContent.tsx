import { CloseIcon } from "../icons/CloseIcon"
import { useRecoilState, useSetRecoilState } from "recoil"
import { showDeleteModal } from "../atoms"
import { InfoIcon } from "../icons/InfoIcon"
import { activeIdForDeletion } from "../atoms"
import { Button } from "./ui/Button"
import axios from "axios"
import { useAlert } from "../hooks/useAlert"

export const DeleteContent = () =>{
    const activeId= useRecoilState(activeIdForDeletion)
    const setDeleteModal = useSetRecoilState(showDeleteModal)


    const setAlert = useAlert()
    const handleDeleteContent = async ()=>{
        try{
            const response = await axios({
                method: "delete",
                url: "http://localhost:3003/api/v1/content",
                data: { contentId: activeId }, 
                headers: {
                  Authorization: localStorage.getItem("token") || "",
                },
            })

            console.log(response)
            setDeleteModal(val =>!val)
            setAlert("contentDeleteSuccess")
        }catch(err){
            console.log(err)
            setAlert("contentDeleteFail")

        }
    }
    return(
        <>

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center ">
                <div className=" w-80 bg-backgroundColor rounded-lg shawdow-2xl ">
                    <div className="flex justify-end p-2">
                        <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setDeleteModal(val =>!val)}}>
                        <CloseIcon variant="sm"/>
                        </div>


                        
                    </div>
                    <div className="p-4 text-center">
                        <InfoIcon />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Delete Content?</h3>
                    </div>

                    <div className="flex w-full justify-center items-center  border-gray-800 border-t-2">
                        <div className="p-4">                        
                            <Button  isLoading={false} 
                            variant="delete" size="md" text="Delete" onClick={handleDeleteContent}/>
                        
                        </div>
                        <div className="p-4">
                        <Button variant="primary" size="md" text="No,Cancel" onClick={()=>{setDeleteModal(val =>!val)}}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}