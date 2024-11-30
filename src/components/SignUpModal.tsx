import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { showAlertModal } from "../atoms"
import { useSetRecoilState } from "recoil"
import PasswordAlertModal from "./PasswordAlert"

export const SignUpModal = ()=>{
const [isLoading,setIsLoading] = useState(false)
const [username , setUsername] = useState('')
const [password,setPassword] = useState('')
const [email,setIsEmail] = useState('')
const setShowAlert = useSetRecoilState(showAlertModal)

    const handleSignUpClick = async ()=>{
        try{

            setIsLoading(true)
            console.log(email,username,password)
            const response = await axios.post("http://localhost:3003/api/v1/signup",{
                email,
                username,
                password
            })
            setIsLoading(false)

            setIsEmail("")
            setPassword("")
            setUsername("")

            console.log(response)

        }catch(err){
            setIsLoading(false)
            console.log("Req Failed")
        }


    }
    return(
        <>
            <PasswordAlertModal type="invalidPassword"/>
            <div className="w-96 h-[480px] bg-backgroundColor rounded-2xl border border-secondaryColor flex flex-col">
                <h1 className="font-montserrat font-black text-4xl text-white text-center p-4">vX Brainly</h1>
                <div className="flex flex-col">
                    <Input label="Email" htmlFor="email" value={email} onChange={(e)=>{setIsEmail(e.target.value)}} />
                    <Input label="Username" htmlFor="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                    <Input label="Password" htmlFor="password" value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                    
                   
                    <div className="mt-12 ml-4 mr-4">
                    <Button 
                    isLoading={isLoading}
                     variant="primary" size="wide" onClick={handleSignUpClick}  text="Sign Up"/>
                    </div>
                </div>
            </div>
        </>
    )
}