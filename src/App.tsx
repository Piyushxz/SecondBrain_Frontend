import { useState } from "react"
import { Button } from "./components/ui/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { Sidebar } from "./components/ui/Sidebar"
import { MainContent } from "./components/MainContent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
          <Sidebar size="lg"/>
          <MainContent/>
      </div>
    
      
    </>
  )
}

export default App
