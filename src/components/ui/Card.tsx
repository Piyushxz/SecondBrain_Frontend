import { useAlert } from "../../hooks/useAlert"
import { DeleteIcon } from "../../icons/DeleteIcon"
import { DocumentIcon } from "../../icons/DocumentIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { Tags } from "./Tags"

interface cardProps  {
    variant :"link"|"tweet"|"youtube",
    title:string,
    link:string,
    content:string,
    tags:[],
    createdAt:string,
    openDeleteModal?:()=>void,
    shared?:boolean

}

const iconStyles={
    link:  <DocumentIcon variant="lg"/>,
    youtube:<YoutubeIcon variant="lg"/>,
    tweet:<TwitterIcon variant="lg"/>

}

export const Card = (props:cardProps) =>{

    const showAlert = useAlert()
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(props.link)

        showAlert("contentLinkCopied",2000);
    }
    return(
        <>
        <div className="w-80 h-96   rounded-xl m-4 bg-[#1a2439]">
            <div className="flex  justify-between p-4 items-center">
                <div className="flex gap-2 items-center">
                    {iconStyles[props.variant]}
                    <h1 className="font-satoshi tracking-tighter font-black text-white text-lg pl-2">{props.title}</h1>
                </div>
                <div className="flex gap-2">
                    <div onClick={copyToClipboard}
                    className="hover:bg-secondaryColor p-1 transition ease-in-out rounded-lg">
                    <ShareIcon variant="md"/>

                    </div>
                    {
                       !props.shared ? 
                       <div onClick={props.openDeleteModal} className="hover:bg-secondaryColor p-1 transition ease-in-out rounded-lg">
                       <DeleteIcon variant="md" />
   
                       </div>
                       :
                       null

                    }

                </div>

            </div>
            

            <div className="">
                {
                    props.variant==="link"?
                    <div className="pl-4 pt-2">
                        <span className="font-montserrat text-[#B7B7B7] font-sm">{props.content}</span>

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
                    <div className=" flex justify-center object-fit  justify-center">

                        <blockquote className="twitter-tweet ">
                        <a href={props.link.replace("x.com","twitter.com")}></a> 
                        </blockquote> 
                    </div>
                    :
                    null

                }
            </div>
            <div className="flex pl-4 pt-2 gap-2">
                {
                    props.tags.map((tag,index)=>(
                        <Tags key={index} text={tag} variant="card"/>
                    ))
                }
            </div>
            <div className="pl-4 pt-1">
                <h1 className="font-montserrat text-[#B7B7B7] font-sm text-sm">Created At {props.createdAt}</h1>
            </div>
        </div>
        </>
    )
}