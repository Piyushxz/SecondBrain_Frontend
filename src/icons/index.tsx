export interface IconProps{
    variant:"sm" | "md" | "lg" |"xs",
    onClick? : ()=>void
}

export const iconStyles = {
    "xs":"size-2",
    "sm":"size-4",
    "md":"size-6",
    "lg" :"size-8"
}