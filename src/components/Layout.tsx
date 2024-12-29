import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Sidebar } from "./ui/Sidebar"
export const Layout = ()=>{
    return(
        <>
        <Sidebar size="lg"/>
        <Outlet/>
        <Footer/>
        </>
    )
}