import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import {  useSetRecoilState,  } from "recoil"
import { modalType, showAlertModal } from "../atoms"
import axios from "axios"



export const LoginModal = ()=>{
    
const [username , setUsername] = useState('')
const [password,setPassword] = useState('')
const setShowAlert = useSetRecoilState(showAlertModal)
const setModalType = useSetRecoilState(modalType)
const handleLoginClick = async () => {
    try {
        const response = await axios.post("http://localhost:3003/api/v1/signin", {
            username,
            password
        });

        console.log(response.status);

        if (response.status === 200) {
            setModalType("LoginSuccess");
            setShowAlert(true);

            setTimeout(() => setShowAlert(false), 5000);
        }
    } catch (err) {
        console.error(err);

        
        //@ts-ignore
        if (err.response) {
            //@ts-ignore
            const { status } = err.response;

            if (status === 403) {
                setModalType("invalidPassword");
                setShowAlert(true);

                setTimeout(() => setShowAlert(false), 5000);
            } else if (status === 401) {
                setModalType("LoginFail");
                setShowAlert(true);

                setTimeout(() => setShowAlert(false), 5000);
            }
        } 
    }
};

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