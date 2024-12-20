import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { showAlertModal } from "../atoms"
import { useSetRecoilState } from "recoil"
import { modalType } from "../atoms"
import { useAlert } from "../hooks/useAlert"


export const SignUpModal = ()=>{

const setAlert = useAlert()
const [isLoading,setIsLoading] = useState(false)
const [username , setUsername] = useState('')
const [password,setPassword] = useState('')
const [email,setIsEmail] = useState('')

const setShowAlert = useSetRecoilState(showAlertModal)
const setModalType = useSetRecoilState(modalType)


    const handleSignUpClick = async ()=>{
        try{

            setIsLoading(true)
            console.log(email,username,password)
            const response = await axios.post("http://localhost:3003/api/v1/signup",{
                email,
                username,
                password
            })
            if (response.status === 200) {
                // setModalType("SignUpSuccess");
                // setShowAlert(true);
    
                // setTimeout(() => setShowAlert(false), 5000);

                setAlert("SignUpSuccess")
            }
            setIsLoading(false)

            setIsEmail("")
            setPassword("")
            setUsername("")

            

        }catch(err){
            setIsLoading(false)
            console.log("Req Failed")
            console.error(err);

        
        //@ts-ignore
        if (err.response) {
            //@ts-ignore
            const { status } = err.response;

            if (status === 400 ) {
                // setModalType("invalidPassword");
                // setShowAlert(true);

                // setTimeout(() => setShowAlert(false), 5000);
                setAlert("invalidPassword")
            } else if (status === 409) {
                // setModalType("SignUpFail");
                // setShowAlert(true);

                // setTimeout(() => setShowAlert(false), 5000);
                setAlert("SignUpFail")
            }
        } 
        }


    }
    return(
        <>
         
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