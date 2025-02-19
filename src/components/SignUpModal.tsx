import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import axios from "axios"
import {motion} from "motion/react"
import { toast } from "sonner"
import { BE_URL } from "../config"


export const SignUpModal = ()=>{

const [isLoading,setIsLoading] = useState(false)
const [username , setUsername] = useState('')
const [password,setPassword] = useState('')
const [email,setIsEmail] = useState('')



    const handleSignUpClick = async ()=>{
        try{

            setIsLoading(true)
            const response = await axios.post(`${BE_URL}/api/v1/signup`,{
                email,
                username,
                password
            })
            if (response.status === 200) {


                // setAlert("SignUpSuccess")
                toast.success("Signed Up Succesfully")
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
                // setAlert("invalidPassword")
                toast.error('Invalid Format')

            } else if (status === 409) {
                // setModalType("SignUpFail");
                // setShowAlert(true);

                // setTimeout(() => setShowAlert(false), 5000);
                // setAlert("SignUpFail")
                toast.error('Could not sign up')

            }
        } 
        }


    }
    return(
        <>
         
            <motion.div initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2,ease:"easeInOut"}}
            className="w-96 h-[480px] bg-backgroundColor rounded-2xl border border-secondaryColor flex flex-col">
                <h1 className="font-satoshi tracking-tighter font-black text-4xl text-white text-center p-4">vX Brainly</h1>
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
            </motion.div>
        </>
    )
}