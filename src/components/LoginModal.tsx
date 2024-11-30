import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { useRecoilState, useSetRecoilState,  } from "recoil"
import { modalType, showAlertModal } from "../atoms"



export const LoginModal = ()=>{
    
const [username , setUsername] = useState('')
const [password,setPassword] = useState('')
const setshowAlert = useSetRecoilState(showAlertModal)
const setModalType = useSetRecoilState(modalType)
const handleLoginClick = () =>{
    setModalType("LoginSuccess")
    setshowAlert(true)

    setTimeout(()=>{setshowAlert(false); setModalType("")},5000);
}
    return(
        <>
            <div className="w-96 h-96 bg-backgroundColor rounded-2xl border border-secondaryColor flex flex-col">
                <h1 className="font-montserrat font-black text-4xl text-white text-center p-4">vX Brainly</h1>
                <div className="flex flex-col">
                    <Input label="Username" htmlFor="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                    <Input label="Password" htmlFor="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    
                   
                    <div className="mt-12 ml-4 mr-4">
                    <Button isLoading={false} 
                    variant="primary" size="wide" onClick={handleLoginClick}  text="Login"/>
                    </div>
                </div>
            </div>
        </>
    )
}