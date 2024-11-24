import { useRecoilState } from "recoil"
import { MenuIcon } from "../icons/MenuIcon"
import { showSidebar } from "../atoms"
import { CloseIcon } from "../icons/CloseIcon"
import { BrainIcon } from "../icons/BrainIcon"
export const MobileSidebar = () =>{
    const [isSidebarOpen,setIsSidebarOpen] = useRecoilState(showSidebar)
    const handleMenuClick = ()=>{
        setIsSidebarOpen(val =>!val)
    }
    return(
        <>
        <div onClick={handleMenuClick}
         className="p-2 hover:bg-gray-800 rounded-lg z-100">
            <MenuIcon variant="lg"/>
        </div>


        
    
            <div className={`bg-[#1a2439] top-0 left-0 w-64 h-screen fixed z-50 transition-all duration-500  ${isSidebarOpen ? " translate-x-0" : " -translate-x-full"}`}>
                <div className="flex justify-between pl-4 pr-4 mt-4 items-center">
                    <div>
                        <BrainIcon variant="lg"/>
                    </div>
                    <div onClick={(val)=>setIsSidebarOpen(!val)}
                            className="p-4 hover:white rounded-lg">
                            <CloseIcon  variant="sm" />
                    </div>
                </div>
            </div>
        
        </>
    )
}