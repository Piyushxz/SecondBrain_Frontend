import { useRecoilValue } from "recoil"
import { queryResponse } from "../atoms"
export const SearchResult = ()=>{

    const response = useRecoilValue(queryResponse)

    console.log(response?.data.answer)

    return(
        <div className="grid grid-cols-12 md:w-[70vw] w-[80vw] mt-4 gap-4">
        <div className="md:col-span-9 col-span-12 ">
            <div className="border border-white rounded-2xl w-full h-40 border-opacity-30 overflow-y-auto font-satoshi text-white p-4">
                
                <p className="">{response?.data.answer}</p>
            </div>
        </div>
        <div className="md:col-span-3 col-span-12 ">
            <div className="px-4 h-24 border border-white rounded-lg">

            </div>
        </div>
    </div>
    )
}