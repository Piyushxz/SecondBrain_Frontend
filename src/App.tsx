

import { ContentModal } from "./components/ui/ContentModal"
import { useRecoilValue } from "recoil"
import {  isLogoutModalOpen, showShareModal, toggleModal } from "./atoms"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { DeleteContent } from "./components/DeleteContent"
import { showDeleteModal } from "./atoms"
import { ShareModal } from "./components/ShareModal"
import { Share } from "./pages/Share"
import { Layout } from "./components/Layout"
import { Main } from "./pages/User/Main"
import { LogoutModal } from "./components/LogoutModal"
import { Toaster } from "sonner"
import { AnimatePresence } from "motion/react"

function App() {


  const isModalOpen = useRecoilValue(toggleModal)
  const deleteModalOpen = useRecoilValue(showDeleteModal)
  // const alertType = useRecoilValue(modalType)
  const shareModal = useRecoilValue(showShareModal)
  const isLogOutModalOpen = useRecoilValue(isLogoutModalOpen)
  return (
    <>
    {/* { 
      //@ts-ignore
      <PasswordAlertModal type={alertType} />
      } */}
    
    <Toaster richColors position='top-center'/>
    <AnimatePresence>
    {
        isModalOpen &&
        <ContentModal/>
      }

      {
        deleteModalOpen &&
        <DeleteContent/> 
      }
      {
        shareModal &&
        <ShareModal/>

      }
      {
        isLogOutModalOpen && <LogoutModal/>
      }
    </AnimatePresence>

  
      <Routes>
        <Route path="/" element={<Home/>}/>

          <Route element={<Layout/>}>
              <Route path="/dashboard" element={<Main/>}/>
          </Route>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/share/:hash" element={<Share/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
