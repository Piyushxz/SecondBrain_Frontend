
interface inputProps {
    label:string,
    htmlFor:string,
    onChange : ()=>void
}

export const Input = (props:inputProps)=>{
    return(
        <>
        <div className="mt-6 ml-6 mr-6">
            <label htmlFor={props.htmlFor} className="block mb-2 text-md font-medium text-white dark:text-white font-montserrat ">{props.label}</label>
            <input onChange={props.onChange} type="text"  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "  required />
        </div> 
        </>
    )
}