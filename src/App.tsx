

import { Sidebar } from "./components/ui/Sidebar"
import { MainContent } from "./components/MainContent"
import { ContentModal } from "./components/ui/ContentModal"
import { useRecoilValue } from "recoil"
import {  toggleModal } from "./atoms"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Home } from "./pages/Home"
function App() {


  const isModalOpen = useRecoilValue(toggleModal)

  return (
    <>
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
      </Routes>
    
      
    </>
  )
}

export default App
