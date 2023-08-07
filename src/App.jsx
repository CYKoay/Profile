import Navbar from "./Components/Navbar"
import './App.scss'
import {  Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home"
import About from "./Components/Pages/About"
import Project from "./Components/Pages/Project"
import Contact from "./Components/Pages/Contact"
import "animate.css"
import { useState } from "react"

function App() {
  const [activePage, setActivePage] = useState("home")

  return (
    <>

      <div className="container-fluid">
        <div className="navbar-container">
         <Navbar activePage={activePage}/>
        </div>
        <div className="body-container">
          <Routes>
            <Route index path="/" element={<Home setActivePage={setActivePage}/>}/>
            <Route path="/aboutme" element={<About setActivePage={setActivePage}/>}/>
            <Route path="/project" element={<Project setActivePage={setActivePage}/>}/>
            <Route path="/contact" element={<Contact setActivePage={setActivePage}/>}/>
          </Routes>
        </div>
      </div>
     </> 
  )
}

export default App
