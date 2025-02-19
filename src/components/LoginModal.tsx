import { useState } from "react"
import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import {motion} from "motion/react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"
import { useSetRecoilState } from "recoil"
import { activeUsername } from "../atoms"
import { BE_URL } from "../config"


export const LoginModal = ()=>{
const [username , setUsername] = useState('')
const [isLoading,setIsLoading] = useState(false)
const [password,setPassword] = useState('')
const navigate = useNavigate()
const setActiveUser = useSetRecoilState(activeUsername)
const handleLoginClick = async () => {
    try {
        setIsLoading(true)
        const response = await axios.post(`${BE_URL}/api/v1/signin`, {
            username,
            password
        });
        setIsLoading(false)
        setUsername("")
        setPassword("")


        if (response.status === 200) {

            // setAlert("LoginSuccess")

            toast.success("Login successful! Redirecting...")


            const token = response.data.token;
            setActiveUser(response.data.username)

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


                // setAlert("LoginFail");
                toast.error("Invalid Credentials")
            } else if (status === 401) {

                toast.error("Could not login")

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
            <motion.div initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2,ease:"easeInOut"}}
             className="w-96  bg-backgroundColor rounded-2xl border border-secondaryColor flex flex-col">
                <h1 className="font-satoshi tracking-tighter font-black text-4xl text-white text-center p-4">vX Brainly</h1>
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
            </motion.div>
            <></>
        </>
    )
}