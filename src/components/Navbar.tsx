import { Button } from "./ui/Button"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { activeUsername, isLogoutModalOpen, showShareModal, toggleModal } from "../atoms"
import { MobileSidebar } from "./MobileSidebar"
import { CircleUserRound, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdownMenu"

export const Navbar = () => {
    const setModal = useSetRecoilState(toggleModal)
    const setShareModal = useSetRecoilState(showShareModal)
    const username = useRecoilValue(activeUsername)
    const setIsLogoutModalOpen = useSetRecoilState(isLogoutModalOpen)

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
                         <DropdownMenu  >
                        <DropdownMenuTrigger>       
                        <div className="p-3 rounded-full bg-primaryColor">
               
                              <CircleUserRound className="text-white"/>
                        </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="text-white font-satoshi bg-secondaryColor">
                            <DropdownMenuLabel >My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator className="text-white bg-white" />
                     
                            <DropdownMenuItem onClick={()=>setIsLogoutModalOpen(true)}
                            ><div className="flex items-center gap-2 hover:opacity-50">
                                <LogOut className="text-red-500"/>
                                <h1 className="text-red-500 font-satoshi text-sm">Logout</h1>
                                </div></DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
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
