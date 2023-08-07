import React from 'react'
import "./Navbar.scss"
import { useNavigate } from 'react-router-dom'
import {AiTwotoneHome} from "react-icons/ai"
import {BsPersonVcardFill} from "react-icons/bs"
import {GrTasks} from "react-icons/gr"
import {RiDiscussFill} from "react-icons/ri"

const Navbar = ({activePage}) => {
  const navigate= useNavigate()

  return (
    <div className="navbar-container">
        <button  className={activePage == "home" ? "activeBtn home-btn" : "btn home-btn"} onClick={() => navigate("/")}>
        <AiTwotoneHome className='icon'/>
        </button>
        <button   className={activePage == "about" ? "activeBtn about-btn" : "btn about-btn"} onClick={() => navigate("/aboutme")}>
        <BsPersonVcardFill  className='icon'/>

        </button>
        <button  className={activePage == "project" ? "activeBtn project-btn" : "btn project-btn"} onClick={() => navigate("/project")}>
        <GrTasks className='icon'/>
        </button>
        <button  className={activePage == "contact" ? "activeBtn contact-btn" : "btn contact-btn"} onClick={() => navigate("/contact")}>
        <RiDiscussFill className='icon'/>
        </button>

    </div>
  )
}

export default Navbar