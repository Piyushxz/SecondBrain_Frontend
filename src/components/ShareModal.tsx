import { useSetRecoilState } from "recoil"
import { CloseIcon } from "../icons/CloseIcon"
import { showShareModal } from "../atoms"
export const ShareModal = () =>{

    const setShareModal = useSetRecoilState(showShareModal)
    return(
        <>  

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center">

                <div className="w-96 h-64 bg-backgroundColor rounded-lg mt-10 border border-white border-opacity-40">
                <div className="flex justify-end p-2">
                    <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setShareModal(val =>!val)}}>
                        <CloseIcon variant="sm"/>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}