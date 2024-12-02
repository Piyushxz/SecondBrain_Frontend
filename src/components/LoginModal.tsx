import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import {  useSetRecoilState,  } from "recoil"
import { modalType, showAlertModal } from "../atoms"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAlert } from "../hooks/utils"



export const LoginModal = ()=>{
const setAlert = useAlert()
const [username , setUsername] = useState('')
const [isLoading,setIsLoading] = useState(false)
const [password,setPassword] = useState('')
const navigate = useNavigate()

const setShowAlert = useSetRecoilState(showAlertModal)
const setModalType = useSetRecoilState(modalType)
const handleLoginClick = async () => {
    try {
        setIsLoading(true)
        const response = await axios.post("http://localhost:3003/api/v1/signin", {
            username,
            password
        });
        setIsLoading(false)
        setUsername("")
        setPassword("")

        console.log(response.status);

        if (response.status === 200) {
            // setModalType("LoginSuccess");
            // setShowAlert(true);

            // setTimeout(() => setShowAlert(false), 5000);
            setAlert("LoginSuccess")

            const token = response.data.token;

            localStorage.setItem("token",token)
            
            navigate("/dashboard")
        }
    } catch (err) {
        setIsLoading(false)
        console.error(err);

        
        //@ts-ignore
        if (err.response) {
            //@ts-ignore
            const { status } = err.response;

            if (status === 403) {
                // setModalType("LoginFail");
                // setShowAlert(true);

                // setTimeout(() => setShowAlert(false), 5000);

                setAlert("LoginFail");
            } else if (status === 401) {
                // setModalType("LoginFail");
                // setShowAlert(true);

                // setTimeout(() => setShowAlert(false), 5000);
                setAlert("LoginFail");

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
                    <Button isLoading={isLoading} 
                    variant="primary" size="wide" onClick={handleLoginClick}  text="Login"/>
                    </div>
                </div>
            </div>
        </>
    )
}