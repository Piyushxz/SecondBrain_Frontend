import { CloseIcon } from "../../icons/CloseIcon";

export const ContentModal = () => {
    return (
        <>
            <div className="bg-[#0000004d] h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-100 bg-opacity-50">
                <div className="w-[450px] h-[500px]  rounded-2xl bg-[#0F1825] shadow-2xl border-2 border-black/50">

                    <div className="flex pl-4 pr-4 py-4 flex justify-between items-center border-b">
                        <h1 className="font-montserrat font-extrabold text-2xl text-white ">Add Content</h1>
                        <CloseIcon variant="sm" />
                    </div>

                    
                </div>
            </div>
        </>
    );
};
