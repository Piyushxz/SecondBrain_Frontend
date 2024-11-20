import { ReactElement } from "react"

export interface ButtonProps{
    text:string,
    variant:"primary" | "secondary",
    size:"sm" | "md" | "lg",
    leftIcon? : ReactElement,
    endIcon? : ReactElement,
    onClick : ()=>void
}


const variantStyles = {
    "primary":" bg-primaryColor text-white",
    "secondary":" bg-secondaryColor text-white"
}

const sizeStyles = {
    "sm":" py-1 px-2 text-sm rounded-lg",
    "md":" py-2 px-4 text-base rounded-lg",
    "lg":" py-2 px-4 text-base rounded-lg"
}

const defaultStyles = {
    "default":"font-montserrat font-normal hover:bg-primaryColor2 transition-all duration-300 "
}


export const Button =(props:ButtonProps)=>{
    return(
        <>

        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles.default}`}>
          {props.leftIcon?
          <div className="flex items-center">
                <div className="pr-2">{props.leftIcon}</div> 
                {props.text}
                </div>
                : 
            <div>{props.text}</div>} 
        </button>
        

        </>
    )
}