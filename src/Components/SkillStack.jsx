import React from 'react'
import {BiLogoReact} from "react-icons/bi"
import {TbBrandTypescript} from "react-icons/tb"
import {RiJavascriptLine} from "react-icons/ri"
import {TbBrandCss3} from "react-icons/tb"
import {TbBrandHtml5} from "react-icons/tb"
import {BsGit} from "react-icons/bs"
import "./SkillStack.css"

const SkillStack = () => {
  return (
    
        <div className="cubespinner">
            <div className="face1"><BiLogoReact style={{color:"#5ED4F4"}}/></div>
            <div className="face2" ><TbBrandTypescript style={{color:"#007ACC"}}/></div>
            <div className="face3" ><RiJavascriptLine style={{color:"#EFD81D"}}/></div>
            <div className="face4" ><TbBrandCss3 style={{color:"#28A4D9"}}/></div>
            <div className="face5" ><TbBrandHtml5 style={{color:"#F06529"}}/></div>
            <div className="face6" ><BsGit style={{color:"#EC4D28"}}/></div>
        </div>
    
  )
}

export default SkillStack