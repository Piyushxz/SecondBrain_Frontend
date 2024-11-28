import { atom } from "recoil";


export const toggleModal = atom({
    key:"toggleModal",
    default:false
})

export const showSidebar = atom({
    key:"showSidebar",
    default:false
})