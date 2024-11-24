import { DeleteIcon } from "../../icons/DeleteIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ShareIcon } from "../../icons/ShareIcon"

export const Card = () =>{
    return(
        <>
        <div className="w-80 h-96   rounded-xl m-4 bg-[#1a2439]">
            <div className="flex  justify-between p-4 items-center">
                <div className="flex gap-2 items-center">
                    <DocumentIcon variant="lg"/>
                    <h1 className="font-montserrat font-semibold text-white text-lg">Project Ideas</h1>
                </div>
                <div className="flex gap-2">
                    <ShareIcon variant="md"/>
                    <DeleteIcon variant="md"/>
                </div>

            </div>
            
            <div className="ml-4 mt-1">
                <span className="font-montserrat text-white font-xs ">www.goolge.com</span>
            </div>

            <div className="pl-4 pt-2">
                <span className="font-montserrat text-[#B7B7B7] font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, error quis corrupti ducimus nostrum ab, fugiat doloribus, cupiditate obcaecati magnam magni tenetur. Praesentium tenetur laboriosam accusamus quae blanditiis pariatur asperiores?</span>
            </div>
            <div className="flex pl-4 pt-2">
                <p className="font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl ">#productivity</p>
                <p className="ml-2 font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl">#idea</p>
            </div>
        </div>
        </>
    )
}