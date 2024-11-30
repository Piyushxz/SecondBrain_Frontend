import { atom } from "recoil";


export const toggleModal = atom({
    key:"toggleModal",
    default:false
})

export const showSidebar = atom({
    key:"showSidebar",
    default:false
})


export const showAlertModal = atom({
    key:"showAlertModal",
    default:false
})

export const modalType = atom({
    key:"modalType",
    default:"LoginSuccess"
})
