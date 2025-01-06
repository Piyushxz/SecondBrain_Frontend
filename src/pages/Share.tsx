import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card } from "../components/ui/Card"
export const Share = ()=>{

    const {hash} = useParams()
    const [username,setUsername] = useState("")
    const [data,setData] = useState([])
    useEffect(()=>{
        (async()=>{

            try{
                const response = await axios.get(`https://secondbrain-backend-9trd.onrender.com/api/v1/brain/${hash}`)


                console.log(response)

                if(response.status===200){
                    setUsername(response.data.user)
                    setData(response.data.content)
                }
       
            }
            catch(err){
                console.log(err)
            }
        })()
    }
        
        ,[])
    return(
        <>
            <div className="h-screen w-screen flex flex-col">
                <div className="m-8">
                <h1 className="font-montserrat text-5xl font-black text-white">
                    {username}'s Links,
                </h1>
                </div>
                <div>
                <div className=" flex flex-wrap md:flex-row flex-col justify-center ml-6">
                {
                    
                    data.map(({_id,type,link,content,title,tags,createdAt})=>
                        
                        <Card key={_id}
                        variant={type}
                         link={link} 
                         content={content} 
                         title={title}
                            
                            tags = {tags}
                        createdAt={createdAt}
                            shared={true}
                         />
                    )
                }
            </div>
                </div>
            </div>
        </>
    )
}