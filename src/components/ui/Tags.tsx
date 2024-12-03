import { CloseIcon } from "../../icons/CloseIcon"

interface tagProps{
    text:string
    variant : "modal" |"card"

}
export const Tags = (props:tagProps)=>{
    return(
        <>  
        {
            props.variant === "card" ?
            <p className={` font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl`}>#{props.text}</p>
            :
            <div className="">
                <p className={` border-2 flex justify-center items-center border-white font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl`}>
                    #{props.text}
                    <div className="ml-2 bg-red-600  hover:bg-red-500 transition ease-in-out p-2 rounded-md">
                    <CloseIcon  variant="xs"/>

                    </div>

                </p>
            </div>

        }

        </>
    )
}