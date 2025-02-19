export interface IconProps{
    variant:"sm" | "md" | "lg" |"xs"|"3xl",
    onClick? : ()=>void,
    className ? : string
}

export const iconStyles = {
    "xs":"size-2",
    "sm":"size-4",
    "md":"size-6",
    "lg" :"size-8",
    "3xl":"size-14"
}