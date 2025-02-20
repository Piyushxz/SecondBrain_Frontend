import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { HomeIcon } from "../icons/HomeIcons"
import { useRecoilState } from "recoil"
import { activeContentType } from "../atoms"

export const SidebarOption = ()=>{

    const [contentType,setContentType] = useRecoilState(activeContentType)

    return(
        <>
            <div className="mt-10">
                <ul>
                     <li onClick={()=>setContentType("home")}>
                    <div className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "home"?" bg-primaryColor2 ":" "}`}>
                            <HomeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-satoshi font-xl">Home</h1>
                        </div>
                    </li> 
                    <li onClick={()=>setContentType("tweet")}>
                        <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "tweet"?" bg-primaryColor2 ":" "}`}>
                            <TwitterIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-satoshi tracking-tighter ">Tweets</h1>
                        </div>
                    </li>
                    <li onClick={()=>setContentType("youtube")}>
                    <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "youtube"?" bg-primaryColor2 ":" "}`}>
                            <YoutubeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-satoshi tracking-tighter font-xl">Videos</h1>
                        </div>
                    </li>

                    <li onClick={()=>setContentType("link")}>
                    <div  className={`flex  pl-8 mb-6 hover:bg-primaryColor2 p-4 cursor-pointer ${contentType === "link"?" bg-primaryColor2 ":" "}`}>
                            <LinkIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-satoshi tracking-tighter font-xl">Links</h1>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}