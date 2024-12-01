import { DeleteIcon } from "../../icons/DeleteIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"

interface cardProps  {
    variant :"links"|"tweets"|"youtube"
}

const iconStyles={
    links:  <DocumentIcon variant="lg"/>,
    youtube:<YoutubeIcon variant="lg"/>,
    tweets:<TwitterIcon variant="lg"/>

}

export const Card = (props:cardProps) =>{
    return(
        <>
        <div className="w-80 h-96   rounded-xl m-4 bg-[#1a2439]">
            <div className="flex  justify-between p-4 items-center">
                <div className="flex gap-2 items-center">
                    {iconStyles[props.variant]}
                    <h1 className="font-montserrat font-semibold text-white text-lg">Project Ideas</h1>
                </div>
                <div className="flex gap-2">
                    <ShareIcon variant="md"/>
                    <DeleteIcon variant="md"/>
                </div>

            </div>
            
            <div className="ml-4 mt-1">
                <span className="font-montserrat text-white font-xs ">www.goolge.com</span>
            </div>

            <div className="">
                {
                    props.variant==="links"?
                    <div className="pl-4 pt-2">
                        <span className="font-montserrat text-[#B7B7B7] font-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, error quis corrupti ducimus nostrum ab, fugiat doloribus, cupiditate obcaecati magnam magni tenetur. Praesentium tenetur laboriosam accusamus quae blanditiis pariatur asperiores?</span>

                    </div>
                    :
                    props.variant ==="youtube"?
                    <div className="w-full p-2">
                        <iframe  
                        src="https://www.youtube.com/embed/_ZsZ4-HyjCg?si=LBHNH9VKQ0do_ixH" 
                        title="YouTube video player"
                         frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen></iframe>
                    </div>
                    :
                    ""

                }
            </div>
            <div className="flex pl-4 pt-2">
                <p className="font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl ">#productivity</p>
                <p className="ml-2 font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl">#idea</p>
            </div>
        </div>
        </>
    )
}