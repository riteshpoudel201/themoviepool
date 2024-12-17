import { useEffect } from "react"
import AppRoutes from "./AppRoutes"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { getUserRegion } from "./utils/common"

const App = () => {
  useEffect(() =>{
    const setRegion = async () => {
     await getUserRegion();
    }
    setRegion();
  },[])
  return (
    <div className="max-w-[1500px] min-h-screen mx-auto">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
