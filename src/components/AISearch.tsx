import { SearchIcon } from "../icons/SearchIcon"
export const AISearch =()=>{
    return(
        <div className="flex justify-center mt-4">
                    <div className="w-[70vw] h-40 rounded-2xl border-2 border-gray-500 border-opacity-50 flex flex-col p-4">
            <textarea
            className="bg-transparent text-white w-full p-2 resize-none flex-grow outline-none 
                    text-gray-900 dark:text-gray-100 
                    font-medium font-satoshi text-2xl
                    placeholder:text-gray-500 dark:placeholder:text-gray-400
                    transition-colors duration-200
                    focus:ring-0 rounded-2xl"
            placeholder="Ask your second brain.."
            ></textarea>
                <div className="w-full flex justify-end items-center mt-2">
                    <div className="border border-white border-opacity-40 rounded-full p-2 hover:bg-opacity-50">
                        <SearchIcon variant="md"/>

                    </div>
                </div>
            </div>

    </div>

    )
}