import { DocumentIcon } from "../../icons/DocumentIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"

interface cardProps{
    variant:"tweet" | "youtube" | "link",
    title:string
}
const iconStyles={
    link:  <DocumentIcon variant="lg"/>,
    youtube:<YoutubeIcon variant="lg"/>,
    tweet:<TwitterIcon variant="lg"/>

}
export const SearchResultCard = (props:cardProps) =>{
    return(
        
        <div className="md:col-span-3 col-span-12 ">
                <h1 className="font-satoshi tracking-tighter font-black text-white text-lg pl-2">Related Content,</h1>

        <div className="px-4 h-24 border border-white rounded-lg">
            <div className="flex gap-2 p-2 ">
                {iconStyles[props.variant]}
                <h1 className="font-satoshi tracking-tighter font-semibold text-white text-lg pl-2">{props.title}</h1>

            </div>
        </div>
    </div> 
    )
}