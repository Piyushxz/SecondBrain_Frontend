import { ReactElement } from "react"
import { LoadingIcon } from "./LoadingIcon"

export interface ButtonProps{
    text:string,
    variant:"primary" | "secondary" | "delete" | "wide",
    size:"sm" | "md" | "lg" |"wide",
    leftIcon? : ReactElement,
    endIcon? : ReactElement,
    onClick? : ()=>void,
    type?:"button" | "submit" | "reset",
    isLoading?:boolean
}


const variantStyles = {
    "primary":" bg-primaryColor text-white hover:bg-primaryColor2",
    "secondary":" bg-secondaryColor text-white hover:bg-primaryColor2",
    "delete":"bg-red-700 text-white hover:bg-red-600 ",
    "wide":"bg-primaryColor text-white hover:bg-primaryColor2"
}

const sizeStyles = {
    "sm":" py-1 px-2 text-sm rounded-lg",
    "md":" py-2 px-4 text-base rounded-lg",
    "lg":" py-2 px-4 text-base rounded-lg",
    "wide":"w-full  font-semibold px-8 rounded-lg pt-4 pb-4 text-center"
}

const defaultStyles = {
    "default":"font-montserrat font-normal  transition-all duration-300 "
}


export const Button =(props:ButtonProps)=>{
    return(
        <>

        <button disabled={props.isLoading}
         type={props.type}onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles.default} ${props.isLoading ? "opacity-50" :"opacity-100"}`}>
          
          {props.isLoading ?
          <div className="flex justify-center">
            <LoadingIcon/>
          </div>
            :
            props.leftIcon?
                    <div className="flex items-center">
                        <div className="pr-2">{props.leftIcon}</div> 
                            {props.text}
                        </div>
                              : 
                        <div>{props.text}</div>
          }

        </button>
        

        </>
    )
}