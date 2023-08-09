import React, { useState, useRef, useEffect } from 'react'
import projectList from "../../Components/Data/Project.js"
import "./Project.scss"
import { BiLogoReact } from "react-icons/bi"
import { TbBrandTypescript } from "react-icons/tb"
import { RiJavascriptLine } from "react-icons/ri"
import { TbBrandCss3 } from "react-icons/tb"
import { TbBrandHtml5 } from "react-icons/tb"
import { RiBootstrapLine } from "react-icons/ri"
import { SiChakraui } from "react-icons/si"
import { DiSass } from "react-icons/di"
import { TbBrandPython } from "react-icons/tb"
import { TbBrandFirebase } from "react-icons/tb"
import { TbBrandFramerMotion } from "react-icons/tb"
import { AiFillGithub } from "react-icons/ai"
import { PiRocketLaunchLight } from "react-icons/pi"
import Motion from '../Motion.tsx'
import AnimatedLetters from '../AnimatedLetters.jsx'
import { motion, useScroll } from "framer-motion"
import Loader from 'react-loaders'


const Project = ({setActivePage}) => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const titleArr = ["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"]
  const sectionsRef = useRef([])
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref
  })
  useEffect (() => {
    setActivePage("project")
    document.title = "Project"
  }, [])

  const logo = {
    React: <BiLogoReact />,
    Typescript: <TbBrandTypescript />,
    Javascript: <RiJavascriptLine />,
    CSS: <TbBrandCss3 />,
    HTML: <TbBrandHtml5 />,
    Bootstrap: <RiBootstrapLine />,
    ChakraUI: <SiChakraui />,
    Sass: <DiSass />,
    Python: <TbBrandPython />,
    Firebase: <TbBrandFirebase />,
    FramerMotion: <TbBrandFramerMotion />
  }


  const scrollToSection = (sectionId) => {
    const projectContainer = document.querySelector(".project-container")
    if (sectionId == -1) {
      projectContainer.scrollTo({
        behavior: "smooth",
        top: 0
      })
    } else {
      const sectionRef = sectionsRef.current[sectionId]
      if (sectionRef) {
        {
          if (projectContainer) {
            projectContainer.scrollTo({
              behavior: "smooth",
              top: sectionRef.offsetTop
            })
          }
        }
      }
    }
  }


  return (
    <>
    <div className="project-container" ref={ref}>
      <div className="project-title-container">
        <div className="project-title" >

          <h1 className='project-title-text'><AnimatedLetters strArray={titleArr} idx={10} letterClass={letterClass} /></h1>

          <h4 className="project-body-text">The compilation of my personal projects, the output  from the countless hours of my self-learning journey, fully driven by passion.</h4>


          <p className='project-footer'>"Practice Makes Perfect"</p>
        </div>
        <div className="parallax-full-img" style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",

        }} />
        <div className="scroll-btn-cont">
          <div className="initial-scrollbar"></div>
          <motion.div className='scrollbar' style={{ scaleY: scrollYProgress }} />
          <button className="scroll-btn" onClick={() => scrollToSection(-1)}>Intro</button>
          {projectList.map((p) =>
            <button

              className='scroll-btn'
              data-section-id={p.id}
              key={p.id}
              style={{
                opacity: 1
              }}
              onClick={() => scrollToSection(p.id)}>{p.name}</button>)
          }
        </div>
      </div>

      {projectList.map((p, index) =>
        <>
          <div className="project-div" key={p + index} ref={(el) => (sectionsRef.current[p.id] = el)} id={p.id}>
            <div className="project-left">
              <div className="project-left-info">
                <Motion>
                  <h1 className={"project-name"}>{p.name}</h1>
                </Motion>
                <Motion>
                  <div className="project-description">{p.description}</div>
                </Motion>
                <Motion>
                  <div className="project-info">
                    <a className="project-btn1" href={p.website} target='_blank' style={{display: p.completion == false && "none"}}><PiRocketLaunchLight className='align-middle'/> <span className="align-middle">LAUNCH</span></a>
                    <a className="project-btn2" href={p.code} target='_blank' style={{display: p.completion == false && "none"}}><AiFillGithub className='align-middle'/> <span className="align-middle">CODE </span></a>
                  </div>
                </Motion>
              </div>
            </div>
            <div className="project-right">
              <div className="project-right-info">
                <Motion>
                  <img className='project-img' src={p.image} />
                </Motion>
                <Motion>
                  <div className="project-tech-container">
                    {p.tech.map((t) => <span key={p + t} className='project-tech'>{logo[t]}<span className="tech-text align-middle">{t}</span></span>)}
                  </div>
                </Motion>
                
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </>
      )}
    </div>
        <Loader type="pacman"/>
    </>
  )
}

export default Project