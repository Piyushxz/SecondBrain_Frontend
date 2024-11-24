import { useRecoilValue } from "recoil";
import { CloseIcon } from "../../icons/CloseIcon";
import { toggleModal } from "../../atoms";
import { useSetRecoilState } from "recoil";
import { Input } from "./Input";
import { Button } from "./Button";
export const ContentModal = () => {
    const isModalOpen = useRecoilValue(toggleModal)
    const setModal = useSetRecoilState(toggleModal)
    const handleCloseModal = () =>{
        setModal(val =>!val);
    }
    return (
        <>
            <div className={`bg-[#0000004d] h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-100 transition-all  duration-350
                 ${isModalOpen ?  " bg-opacity-50 opacity-1":" bg-opacity-100 opacity-0 "}`}>
                <div className="w-[600px] h-[680px]  rounded-2xl bg-[#0F1825] shadow-2xl border-2 border-black/50">

                    <div className="flex pl-4 pr-4 py-4 flex justify-between items-center border-b border-gray-700">
                        <h1 className="font-montserrat font-extrabold text-2xl text-white ">Add Content</h1>
                        <div onClick={handleCloseModal}
                        className="p-2 hover:bg-gray-800 rounded-lg">
                        <CloseIcon  variant="sm" />
                        </div>
                        
                    </div>
                    <form onSubmit={()=>console.log("Form")}> 
                        <div>
                            <Input label="Title" htmlFor="title" onChange={()=>{}} />
                        </div>
                        <div>
                            <Input label="Type" htmlFor="title" onChange={()=>{}} />
                        </div>
                        <div>
                            <Input label="Link(Optional)" htmlFor="title" onChange={()=>{}} />
                        </div>
                        <div>
                            <Input label="Tags" htmlFor="title" onChange={()=>{}} />
                        </div>
                        <div>
                            <Input label="Content(Optional)" htmlFor="title" onChange={()=>{}} />
                        </div>
                        

                        <div className="flex justify-center  pl-4 pr-4 py-4 border-t border-gray-700 mt-8">
                            <Button variant="primary"size="lg"  text="Add Content " onClick={()=>{}}/>
                           
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    );
};
