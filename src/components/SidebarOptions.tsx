import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { HomeIcon } from "../icons/HomeIcons"
import { LogoutIcon } from "../icons/LogoutIcon"
import { useRecoilState ,useSetRecoilState} from "recoil"
import { activeContentType ,isLogoutModalOpen} from "../atoms"

export const SidebarOption = ()=>{

    const [contentType,setContentType] = useRecoilState(activeContentType)
    const setIsLogoutModalOpen = useSetRecoilState(isLogoutModalOpen)

    return(
        <>
            <div className="mt-10">
                <ul>
                     <li onClick={()=>setContentType("home")}>
                    <div className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "home"?" bg-primaryColor2 ":" "}`}>
                            <HomeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Home</h1>
                        </div>
                    </li> 
                    <li onClick={()=>setContentType("tweet")}>
                        <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "tweet"?" bg-primaryColor2 ":" "}`}>
                            <TwitterIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Tweets</h1>
                        </div>
                    </li>
                    <li onClick={()=>setContentType("youtube")}>
                    <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "youtube"?" bg-primaryColor2 ":" "}`}>
                            <YoutubeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Videos</h1>
                        </div>
                    </li>

                    <li onClick={()=>setContentType("link")}>
                    <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "link"?" bg-primaryColor2 ":" "}`}>
                            <LinkIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Links</h1>
                        </div>
                    </li>
                    <li onClick={()=>setIsLogoutModalOpen(true)}>
                    <div className="flex  pl-6 hover:bg-primaryColor2 p-4">
                            <LogoutIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">LogOut</h1>
                        </div>
                    </li> 
                </ul>
            </div>
        </>
    )
}