import { Button } from "./ui/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { Card } from "./ui/Card"
import { ShareIcon } from "../icons/ShareIcon"

import { useSetRecoilState } from "recoil"
import { toggleModal } from "../atoms"
export const MainContent= ()=>{
    const setModal = useSetRecoilState(toggleModal)
    const handleOpenModal = () =>{
        setModal(val =>!val);
    }
    return(
        <>
        
        <div className="w-full h-screen bg-background px-6 pt-8 ">
            <div className="grid-cols-10   flex justify-between">
                <div className=" col-span-3 md:col-span-5">
                    <h1 className="font-montserrat font-extrabold text-4xl text-white">Your Notes</h1>
                </div>
                <div className=" col-span-10 md:col-span-5  gap-4 flex">
                    <div className="">
                        <Button 
                         leftIcon={<ShareIcon variant="md"/>}  variant="secondary" size="lg" onClick={()=>console.log("Hey")} text="Share Brain" ></Button> 

                    </div>
                    <div >
                        <Button leftIcon={<PlusIcon variant="md"/>}  variant="primary" size="lg" onClick={handleOpenModal} text="Add Content" ></Button> 

                    </div>
                </div>
            </div>

            <div className=" flex flex-wrap md:flex-row flex-col mt-10">
                <Card/>
                
            </div>
        </div>
        </>
    )
}