import { Button } from "./ui/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { Modal } from "./ui/Modal"
import { ShareIcon } from "../icons/ShareIcon"
export const MainContent= ()=>{
    return(
        <>
        <div className="w-full h-screen bg-background px-6 pt-8 ">
            <div className="grid-cols-10   flex justify-between">
                <div className=" col-span-3 md:col-span-5">
                    <h1 className="font-montserrat font-extrabold text-4xl text-white">Your Notes</h1>
                </div>
                <div className=" col-span-10 md:col-span-5 grid gap-4 md:flex">
                    <div className="">
                        <Button leftIcon={<ShareIcon variant="md"/>}  variant="secondary" size="lg" onClick={()=>console.log("Hey")} text="Share Brain" ></Button> 

                    </div>
                    <div >
                        <Button leftIcon={<PlusIcon variant="md"/>}  variant="primary" size="lg" onClick={()=>console.log("Hey")} text="Add Content" ></Button> 

                    </div>
                </div>
            </div>

            <div className=" flex flex-wrap md:flex-row flex-col mt-10">
                <Modal/>
                <Modal/>
                <Modal/>
                <Modal/>
                <Modal/>

            </div>
        </div>
        </>
    )
}