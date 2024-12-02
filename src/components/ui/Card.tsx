import { DeleteIcon } from "../../icons/DeleteIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"

interface cardProps  {
    variant :"link"|"tweet"|"youtube",
    title:string,
    link:string,
    text:string

}

const iconStyles={
    link:  <DocumentIcon variant="lg"/>,
    youtube:<YoutubeIcon variant="lg"/>,
    tweet:<TwitterIcon variant="lg"/>

}

export const Card = (props:cardProps) =>{
    return(
        <>
        <div className="w-80 h-96   rounded-xl m-4 bg-[#1a2439]">
            <div className="flex  justify-between p-4 items-center">
                <div className="flex gap-2 items-center">
                    {iconStyles[props.variant]}
                    <h1 className="font-montserrat font-semibold text-white text-lg">{props.title}</h1>
                </div>
                <div className="flex gap-2">
                    <ShareIcon variant="md"/>
                    <DeleteIcon variant="md"/>
                </div>

            </div>
            

            <div className="">
                {
                    props.variant==="link"?
                    <div className="pl-4 pt-2">
                        <span className="font-montserrat text-[#B7B7B7] font-sm">{props.text}</span>

                    </div>
                    :
                    props.variant ==="youtube"?
                    <div className="w-full p-2">
                        <iframe  
                        src={props.link.replace("watch","embed").replace("?v=","/")}
                        title="YouTube video player"
                         frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen></iframe>
                    </div>
                    :
                    props.variant==="tweet"?
                    <div className=" flex justify-center object-fit">

                        <blockquote className="twitter-tweet ">
                        <a href={props.link.replace("x.com","twitter.com")}></a> 
                        </blockquote> 
                    </div>
                    :
                    null

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