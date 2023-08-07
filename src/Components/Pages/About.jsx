import React, {useEffect, useState} from 'react'
import "./About.scss"
import AnimatedLetters from "../AnimatedLetters";
import Skillset from '../Skillset';
import {PiQuestionBold} from "react-icons/pi"
import {FaLightbulb} from "react-icons/fa"
import SkillStack from '../SkillStack';
import Loader from "react-loaders"

const About = ({setActivePage}) => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const [tipsStatus, setTipsStatus] = useState("false")
  const [btnClass, setBtnClass] = useState("btn-animate")
  const aboutTitleArray = ["A","B","O","U","T"," ","M","E"]
  const stackArray = ["M","Y"," ","S","K","I","L","L","S","E","T"]

  const handleClick= () => {
    setTipsStatus(true);
    setBtnClass("")
  }

   useEffect (() => {
    setActivePage("about")
    document.title="About"
  }, [])
  return (
    <>
    <div className="container-about-main">
    <div className="container-about">
      <div className="title-about"><AnimatedLetters strArray={aboutTitleArray} idx={10} letterClass={letterClass} /></div>
      <div className="text-about">
        A highly self-motivated, disciplined, self-taught web developer who decided to take a career change into software engineering. 
        <br/>
        <br/>
        This portfolio is a testament to the countless hours of self-study, personal projects, and genuine passion for coding that I have poured into refining my skills. Although my professional path in this field is still in its early stages, my determination and dedication to mastering web development know no bounds.
        <br/>
        <br/>
        Besides, I am a team player and has a strong beliefs in the quote "Many hands make light work". My previous experience as a sales person in multinational medical company is the catalyst for my strong interpersonal communication skills.
      </div>
      <div className="stack">
        <div className="stack-header flex hstack">
        <AnimatedLetters strArray={stackArray} idx={20} letterClass={letterClass}/>
        <div className={btnClass}><button className="hint-btn" onClick={handleClick}><PiQuestionBold/></button>
        </div></div>
        {tipsStatus === true && 
        <div className='hint-container'>
           <button type="button" onClick={() => setTipsStatus(false)} className="btn-close"  aria-label="Close" ></button>
          <div className="hint-msg"><FaLightbulb style={{color:"#43ff4f"}}/>  Familiar</div>
          <div className="hint-msg"><FaLightbulb style={{color:"#dfed23"}}/>  Intermediate</div>
          <div className="hint-msg"><FaLightbulb style={{color:"#ffa600"}}/>  Basic</div>
          </div>}
        <div className="text-stack">
          <Skillset/>
        </div>
      </div>
    </div>
        <div className="stage-cube-cont">
          <SkillStack/>
        </div>
        </div>
        <Loader type="pacman"/>
        </>
  )
}

export default About