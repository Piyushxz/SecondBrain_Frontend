import { CloseIcon } from "../icons/CloseIcon"
import { useSetRecoilState } from "recoil"
import { showDeleteModal } from "../atoms"

export const DeleteContent = () =>{

    const setDeleteModal = useSetRecoilState(showDeleteModal)
    return(
        <>

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center bg-opacity-10">
                <div className="h-64 w-80 bg-backgroundColor rounded-lg shawdow-2xl ">
                    <div className="flex justify-end p-2">
                        <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setDeleteModal(val =>!val)}}>
                        <CloseIcon variant="sm"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}