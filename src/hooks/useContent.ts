import axios from "axios"
import { useEffect, useState } from "react"

export const useContent = ()=>{
    const [content , setContent] = useState([])


    async function getData(){
        const response = await axios.get("http://localhost:3003/api/v1/content",{
            headers :{
                "Authorization":localStorage.getItem("token")
            }
        })
        setContent(response.data.contents)
    }

    useEffect(()=>{

        const intervalId = setInterval(getData,5000);


        return()=>clearInterval(intervalId)
    },[])


    return content

}