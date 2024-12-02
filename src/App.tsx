

import { Sidebar } from "./components/ui/Sidebar"
import { MainContent } from "./components/MainContent"
import { ContentModal } from "./components/ui/ContentModal"
import { useRecoilValue } from "recoil"
import {  modalType, toggleModal } from "./atoms"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import PasswordAlertModal from "./components/PasswordAlert"
function App() {


  const isModalOpen = useRecoilValue(toggleModal)
  const alertType = useRecoilValue(modalType)
  return (
    <>
    { 
      //@ts-ignore
      <PasswordAlertModal type={alertType} />
      }
    
    {
        isModalOpen &&
        <ContentModal/>
      }
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={    
      <div className="flex">
          <Sidebar size="lg"/>
          <MainContent/>
      </div>}/>

          <Route path="/signin" element={<Login/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
