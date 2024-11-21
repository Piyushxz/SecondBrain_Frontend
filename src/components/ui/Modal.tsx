import { DeleteIcon } from "../../icons/DeleteIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ShareIcon } from "../../icons/ShareIcon"

export const Modal = () =>{
    return(
        <>
        <div className="w-80 h-96   rounded-xl m-4 bg-[#1a2439]">
            <div className="flex  justify-between p-2 items-center">
                <div className="flex gap-2 items-center">
                    <DocumentIcon variant="lg"/>
                    <h1 className="font-montserrat font-bold text-white text-lg">Project Ideas</h1>
                </div>
                <div className="flex gap-2">
                    <ShareIcon variant="md"/>
                    <DeleteIcon variant="md"/>
                </div>
            </div>
        </div>
        </>
    )
}