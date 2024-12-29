import { Outlet } from "react-router-dom"

import { Sidebar } from "./ui/Sidebar"
export const Layout = ()=>{
    return(
        <>
        <Sidebar size="lg"/>
        <Outlet/>
        
        </>
    )
}