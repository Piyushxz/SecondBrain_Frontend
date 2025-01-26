import { AxiosResponse } from "axios";
import { atom } from "recoil";

export const queryResponse = atom<AxiosResponse | null>({
    key: "queryResponse", 
    default: null,        
  });

export const queryLoading = atom({
    key:"queryLoading",
    default:false
})

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


export const contentModalType = atom({
    key:"contentModalType",
    default:"tweet"
})

export const showDeleteModal = atom({
    key:"showDeleteModal",
    default:false
})

export const activeIdForDeletion = atom({
    key:"activeIdForDeletion",
    default:""
})

export const showShareModal = atom({
    key:"showShareModal",
    default:false
})

export const activeContentType = atom({
    key:"activeContentType",
    default:"home"
})

export const isLogoutModalOpen = atom({
    key:"isLogoutModalOpen",
    default:false
})