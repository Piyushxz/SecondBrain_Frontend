import axios from "axios"
import { useEffect, useState } from "react"

export const useContent = ()=>{
    const [content , setContent] = useState([])



    useEffect(()=>{
        (async()=>{
            const response = await axios.get("http://localhost:3003/api/v1/content",{
                headers :{
                    "Authorization":localStorage.getItem("token")
                }
            })
            setContent(response.data.contents)
        })()
    },[])


    return content

}