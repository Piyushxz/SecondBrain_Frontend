import { useRecoilValue } from "recoil"
import { queryResponse } from "../atoms"
import { SearchResultCard } from "./ui/SearchResultCard"
export const SearchResult = ()=>{

    const response = useRecoilValue(queryResponse)

    return(
        <div className="grid grid-cols-12 md:w-[70vw] w-[80vw] mt-4 gap-4">
        <div className="md:col-span-9 col-span-12 ">
            <div className="border border-white rounded-2xl w-full h-40 border-opacity-30 overflow-y-auto font-satoshi text-white p-4">
                
                <p className="">{response?.data.answer}</p>
            </div>
        </div>
        
        <SearchResultCard variant={response?.data.sources[0].type} title={response?.data.sources[0].content} link={response?.data.sources[0].url} content={response?.data.sources[0].content} description={response?.data.sources[0].description}/>
    </div>
    )
}