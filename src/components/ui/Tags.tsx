
interface tagProps{
    text:string
}
export const Tags = (props:tagProps)=>{
    return(
        <>
            <p className="border-2 border-white font-montserrat text-white bg-backgroundColor px-4 py-2 text-sm rounded-2xl">#{props.text}</p>

        </>
    )
}