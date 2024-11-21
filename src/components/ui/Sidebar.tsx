import { BrainIcon } from "../../icons/BrainIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { LinkIcon } from "../../icons/LinkIcon"
import { TagIcon } from "../../icons/TagsIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"

interface sidebarProps{
    size:"md" | "lg",
    
}

const sizeStyles = {
    "md":" w-48",
    "lg":" w-80"
}


export const Sidebar = (props:sidebarProps)=>{
    return(
        <>
        <div className={`h-screen ${sizeStyles[props.size]} bg-[#1a2439]  `}>
            <div className="flex mt-4 p-2">
            <BrainIcon variant="lg"/>
            <div className="font-montserrat text-white font-black text-2xl pl-2">
                Second Brain
            </div>
        </div>

            <div className="mt-10">
                <ul>
                    <li>
                        <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <TwitterIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Tweets</h1>
                        </div>
                    </li>
                    <li>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <YoutubeIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Videos</h1>
                        </div>
                    </li>
                    <li>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <DocumentIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Documents</h1>
                        </div>
                    </li>
                    <li>
                    <div className="flex  pl-8 mb-6 hover:bg-primaryColor2 p-2">
                            <LinkIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Links</h1>
                        </div>
                    </li>
                    <li>
                    <div className="flex  pl-6 hover:bg-primaryColor2 p-2">
                            <TagIcon variant="lg"/>
                            <h1 className="pl-4 text-gray-300 text-lg font-montserrat font-xl">Tags</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}