import { Button } from "./ui/Button"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"

import { useRecoilValue, useSetRecoilState } from "recoil"
import { activeUsername, showShareModal, toggleModal } from "../atoms"
import { MobileSidebar } from "./MobileSidebar"

export const Navbar = () => {
    const setModal = useSetRecoilState(toggleModal)
    const setShareModal = useSetRecoilState(showShareModal)
    const username = useRecoilValue(activeUsername)
    const handleOpenModal = () => {
        setModal((val) => !val)
    }

    const handleOpenShareModal = ()=>{
        setShareModal((val) =>!val)
    }
    return (
        <>
            <div className="grid-cols-10 flex justify-between items-center p-4 z-40">
               


              
                <div className="col-span-3 md:col-span-5">
                    <h1 className="font-satoshi tracking-tighter font-extrabold md:text-4xl text-3xl text-white">Welcome back , {username}!</h1>
                </div>
                <div className="md:hidden block">
                    <MobileSidebar />
                </div>

                <div className="hidden md:flex col-span-10 md:col-span-5 gap-4 justify-end">
                    <Button
                        leftIcon={<ShareIcon variant="md" />}
                        variant="secondary"
                        size="lg"
                        onClick={handleOpenShareModal}
                        text="Share Brain"
                    />
                    <Button
                        leftIcon={<PlusIcon variant="md" />}
                        variant="primary"
                        size="lg"
                        onClick={handleOpenModal}
                        text="Add Content"
                    />
                </div>
            </div>

            <div className="md:hidden block mt-4 px-4 flex gap-4">
                <Button
                    leftIcon={<ShareIcon variant="md" />}
                    variant="secondary"
                    size="lg"
                    onClick={handleOpenShareModal}
                    text="Share Brain"
                />
                <Button
                    leftIcon={<PlusIcon variant="md" />}
                    variant="primary"
                    size="lg"
                    onClick={handleOpenModal}
                    text="Add Content"
                />
            </div>
        </>
    )
}
