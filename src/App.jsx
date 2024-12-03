import AppRoutes from "./AppRoutes"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="max-w-[1500px] min-h-screen mx-auto">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
