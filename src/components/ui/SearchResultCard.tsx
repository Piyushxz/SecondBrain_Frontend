import { DocumentIcon } from "../../icons/DocumentIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { LinkIcon } from "../../icons/LinkIcon"

interface cardProps{
    variant:"tweet" | "youtube" | "link" | "document",
    title:string,
    link?:string,
    content?:string,
    description?:string
}
const iconStyles={
    link:  <LinkIcon variant="md"/>,
    youtube:<YoutubeIcon variant="md"/>,
    tweet:<TwitterIcon variant="md"/>,
    document : <DocumentIcon variant="md"/>


}
export const SearchResultCard = (props:cardProps) =>{
    return(
        
        <div className="md:col-span-3 col-span-12 ">
                <h1 className="font-satoshi tracking-tighter font-black text-white text-lg pl-2">Related Content,</h1>

        <div className="px-4 h-40 border border-gray-600/80  rounded-lg">
            <div className="flex gap-2 p-2 ">
                {iconStyles[props.variant]}
                <h1 className="font-satoshi tracking-tighter font-semibold text-white text-md pl-2">{props.title}</h1>

            </div>
            <div className=" max-h-20 overflow-y-auto overflow-x-hidden">
                {
                    props.variant==="document"?
                        <div className="px-2 pt-1 ">
                            <span className="font-montserrat text-[#B7B7B7] font-sm">{props.description}</span>
    
                        </div>
                                        :
                    props.variant==="link"?
                    <div className="pl-2 pt-1">
                        <span className="font-montserrat text-[#B7B7B7] font-sm">{props.link}</span>

                    </div>
                    :
                    props.variant ==="youtube"?
                    <div className="pl-2 pt-1">
                        <span className="font-montserrat text-[#B7B7B7] font-sm text-sm">{props.link}</span>

                    </div>
                    :
                    props.variant==="tweet"?
                    <div className=" flex justify-center object-fit  justify-center">

                      { props.link && <blockquote className="twitter-tweet ">
                        <a href={props.link.replace("x.com","twitter.com")}></a> 
                        </blockquote>} 
                    </div>
                    :
                    null

                }
            </div>
        </div>


    </div> 
    )
}