import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAlert } from "../hooks/useAlert"


export const LoginModal = ()=>{
const setAlert = useAlert()
const [username , setUsername] = useState('')
const [isLoading,setIsLoading] = useState(false)
const [password,setPassword] = useState('')
const navigate = useNavigate()

const handleLoginClick = async () => {
    try {
        setIsLoading(true)
        const response = await axios.post("https://secondbrain-backend-9trd.onrender.com/api/v1/signin", {
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
            
            navigate("/dashboard/")
        }


    } catch (err) {
        setIsLoading(false)
        console.error(err);

        
        //@ts-ignore
        if (err.response) {
            //@ts-ignore
            const { status } = err.response;

            if (status === 403) {


                setAlert("LoginFail");
            } else if (status === 401) {

                setAlert("LoginFail");

            }
 
        } 
    }
};
        const handleTestClick = ()=>{
            setUsername("testUser")
            setPassword("123456")
        }

    return(
        <>
            <div className="w-96  bg-backgroundColor rounded-2xl border border-secondaryColor flex flex-col">
                <h1 className="font-montserrat font-black text-4xl text-white text-center p-4">vX Brainly</h1>
                <div className="flex flex-col">
                    <Input label="Username" htmlFor="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                    <Input label="Password" htmlFor="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    
                   
                    <div className="mt-12 ml-4 mr-4 flex flex-col gap-2">
                    <Button isLoading={isLoading} 
                    variant="primary" size="wide" onClick={handleLoginClick}  text="Login"/>
                    <div className="pb-2">
                    <Button 
                    variant="primary" size="wide" onClick={handleTestClick}  text="Set Test Credentials"/>
                    </div>



                    </div>
                </div>
            </div>
            <></>
        </>
    )
}