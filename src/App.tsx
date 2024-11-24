

import { Sidebar } from "./components/ui/Sidebar"
import { MainContent } from "./components/MainContent"
import { ContentModal } from "./components/ui/ContentModal"
import { useRecoilValue } from "recoil"
import {  toggleModal } from "./atoms"
function App() {


  const isModalOpen = useRecoilValue(toggleModal)

  return (
    <>
      {
        isModalOpen &&
        <ContentModal/>
      }
      
      <div className="flex">
          <Sidebar size="lg"/>
          <MainContent/>
      </div>
    
      
    </>
  )
}

export default App
