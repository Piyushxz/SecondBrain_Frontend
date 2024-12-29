import { useSetRecoilState } from "recoil"
import { isLogoutModalOpen } from "../atoms"
import { CloseIcon } from "../icons/CloseIcon"
import { InfoIcon } from "../icons/InfoIcon"
import { Button } from "./ui/Button"
import { useNavigate } from "react-router-dom"

export const LogoutModal = ()=>{
    const setIsLogoutModalOpen = useSetRecoilState(isLogoutModalOpen)
    const navigate = useNavigate()

    const handleLogoutClick = ()=>{
        setIsLogoutModalOpen(false)
        localStorage.removeItem("token")
        navigate("/")

    }
    return(
        <>
                    <div className="h-screen w-screen fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center ">
                <div className=" w-80 bg-backgroundColor rounded-lg shawdow-2xl ">
                    <div className="flex justify-end p-2">
                        <div className="hover:bg-primaryColor2 p-2 transition ease-in-out rounded-lg " onClick={()=>{setIsLogoutModalOpen(val =>!val)}}>
                        <CloseIcon variant="sm"/>
                        </div>


                        
                    </div>
                    <div className="p-4 text-center">
                        <InfoIcon />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Logout?</h3>
                    </div>

                    <div className="flex w-full justify-center items-center  border-gray-800 border-t-2">
                        <div className="p-4">                        
                            <Button  isLoading={false} 
                            variant="delete" size="md" text="Logout" onClick={handleLogoutClick}/>
                        
                        </div>
                        <div className="p-4">
                        <Button variant="primary" size="md" text="No,Cancel" onClick={()=>{setIsLogoutModalOpen(val =>!val)}}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}