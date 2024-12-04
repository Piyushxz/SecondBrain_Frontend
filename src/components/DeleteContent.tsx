import { CloseIcon } from "../icons/CloseIcon"

export const DeleteContent = () =>{
    return(
        <>

            <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center bg-opacity-10">
                <div className="h-64 w-80 bg-backgroundColor rounded-lg shawdow-2xl ">
                    <div className="flex justify-end p-4">
                        <CloseIcon variant="sm"/>
                    </div>
                </div>
            </div>
        </>
    )
}