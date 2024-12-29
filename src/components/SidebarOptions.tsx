import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { HomeIcon } from "../icons/HomeIcons"
import { LogoutIcon } from "../icons/LogoutIcon"
import { useSetRecoilState } from "recoil"
import { activeContentType } from "../atoms"
export const SidebarOption = ()=>{

    const setContentType = useSetRecoilState(activeContentType)
    return(
        <>
            <div className="mt-10">
                <ul>
                     <li onClick={()=>setContentType("home")}>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2 ">
                            <HomeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Home</h1>
                        </div>
                    </li> 
                    <li onClick={()=>setContentType("tweet")}>
                        <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <TwitterIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Tweets</h1>
                        </div>
                    </li>
                    <li onClick={()=>setContentType("youtube")}>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <YoutubeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Videos</h1>
                        </div>
                    </li>

                    <li onClick={()=>setContentType("link")}>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <LinkIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Links</h1>
                        </div>
                    </li>
                    <li>
                    <div className="flex  pl-6 hover:bg-primaryColor2 p-2">
                            <LogoutIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">LogOut</h1>
                        </div>
                    </li> 
                </ul>
            </div>
        </>
    )
}