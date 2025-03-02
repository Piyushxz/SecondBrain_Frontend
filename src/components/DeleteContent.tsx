import { CloseIcon } from "../icons/CloseIcon"
import {  useRecoilValue, useSetRecoilState } from "recoil"
import { showDeleteModal } from "../atoms"
import { InfoIcon } from "../icons/InfoIcon"
import { activeIdForDeletion } from "../atoms"
import { Button } from "./ui/Button"
import axios from "axios"
import { toast } from "sonner"
import {motion} from "motion/react"
import { BE_URL } from "../config"
export const DeleteContent = () =>{
    const activeId= useRecoilValue(activeIdForDeletion)
    const setDeleteModal = useSetRecoilState(showDeleteModal)
    console.log("type", typeof activeId)


    const handleDeleteContent = async () => {
      try {
        const response = await toast.promise(
          axios.delete(`${BE_URL}/api/v1/content`, {
            data: { contentId: activeId }, 
            headers: {
              Authorization: localStorage.getItem("token") || "",
            },
          }),
          {
            loading: "Deleting Content...",
            success: () => "Content Deleted Successfully!",
            error: "Could not delete content",
          }
        );
    
        console.log(response);
        setDeleteModal((val) => !val);
      } catch (err) {
        console.error("Error deleting content:", err);
      }
    };
    
    return(
        <>

            <motion.div
            initial={{opacity:0,scale:0.9}}
            transition={{ease:"easeInOut",duration:0.1}}
            exit={{opacity:0,scale:0.9}}
            animate={{opacity:1,scale:1}}
            className="h-screen w-screen fixed top-0 opacity-40 left-0 bg-[#0000004d] flex justify-center items-center ">
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
            </motion.div>
        </>
    )
}