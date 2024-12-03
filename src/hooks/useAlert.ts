import { modalType } from "../atoms"
import { showAlertModal } from "../atoms"
import { useSetRecoilState } from "recoil"
import { AlertModaProps } from "../components/PasswordAlert"


export const useAlert = ()=>{
    const setShowAlert = useSetRecoilState(showAlertModal)
    const setModalType = useSetRecoilState(modalType)


    return function(type:string){
        setShowAlert(true)
        setModalType(type)
    
        setTimeout(() => setShowAlert(false), 5000);
    }

    

}