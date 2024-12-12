import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Galery from "./pages/Galery"
import Contacts from "./pages/Contacs"
import NavBar from "./layouts/NavBar"
import Footer from "./layouts/Footer"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galery />} />
        <Route path="/contactos" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
