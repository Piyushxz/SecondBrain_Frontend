import axios from "axios";
import { SearchIcon } from "../icons/SearchIcon"
import {  useRef } from "react"
import {  useSetRecoilState } from "recoil";
import { queryLoading, queryResponse } from "../atoms";
import { BE_URL } from "../config";
export const AISearch =()=>{
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    const setQueryResponse = useSetRecoilState(queryResponse)
    const setQueryLoading = useSetRecoilState(queryLoading)
    const handleInputQuery= async ()=>{

        if(!inputRef.current?.value ){
            return
        }

        if(inputRef.current.value.length  < 1){
            return
        }

        try{
            setQueryLoading(true)
            const response = await axios.post(`${BE_URL}/api/v1/search`,{
                query:inputRef.current?.value},
                {
                    headers:{
                        authorization:localStorage.getItem('token')
                    },
                    
                
            })
    
            console.log(response)
            setQueryLoading(false)
            setQueryResponse(response)

        }
        catch(e){
            setQueryLoading(false)
            console.log(e)
        }

    }

    return(
            <div className=" w-[80vw] md:w-[70vw] h-40 rounded-2xl border-2 border-gray-500 border-opacity-50 flex flex-col p-4">
            <textarea ref={inputRef}
            className="bg-transparent text-white w-full p-2 resize-none flex-grow outline-none 
                    text-gray-900 dark:text-gray-100 
                    font-medium font-satoshi text-2xl
                    placeholder:text-gray-500 dark:placeholder:text-gray-400
                    transition-colors duration-200
                    focus:ring-0 rounded-2xl"
            placeholder="Ask your second brain.."
            ></textarea>
                <div className="w-full flex justify-end items-center mt-2">
                    <div onClick={handleInputQuery}
                     className="border border-white border-opacity-40 rounded-full p-2 hover:bg-opacity-50">
                        <SearchIcon variant="md"/>

                    </div>
                </div>
            </div>


    )
}