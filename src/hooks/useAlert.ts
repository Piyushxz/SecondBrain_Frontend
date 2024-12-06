import { modalType } from "../atoms"
import { showAlertModal } from "../atoms"
import { useSetRecoilState } from "recoil"


export const useAlert = ()=>{
    const setShowAlert = useSetRecoilState(showAlertModal)
    const setModalType = useSetRecoilState(modalType)


    return function(type:string,ms:number=5000){
        setShowAlert(true)
        setModalType(type)
    
        setTimeout(() => setShowAlert(false), ms);
    }

    

}