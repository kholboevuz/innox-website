import { Route, Routes } from "react-router-dom"
import Footer from "./components/partials/Footer"
import Navbar from "./components/partials/Navbar"
import Home from "./pages/Home"
import "@/index.css"
import PageNotFound from "./components/partials/PageNotFound"
function App() {


  return (
    <>
      <Navbar />  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer/>

    </>
  )
}

export default App
