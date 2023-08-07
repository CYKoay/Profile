import React from 'react'
import {BiLogoReact} from "react-icons/bi"
import {TbBrandTypescript} from "react-icons/tb"
import {RiJavascriptLine} from "react-icons/ri"
import {TbBrandCss3} from "react-icons/tb"
import {TbBrandHtml5} from "react-icons/tb"
import {RiBootstrapLine} from "react-icons/ri"
import {SiChakraui} from "react-icons/si"
import { DiSass} from "react-icons/di"
import {TbBrandPython} from "react-icons/tb"
import {BsGit} from "react-icons/bs"


const Skillset = () => {

  return (
    <>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-familiar badge-animate _2 align-middle"><BiLogoReact className='align-middle'/> React</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-familiar badge-animate _4 align-middle"><TbBrandTypescript className='align-middle'/> Typescript</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-familiar badge-animate _6 align-middle"><RiJavascriptLine className='align-middle'/> Javascript</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-familiar badge-animate _8 align-middle"><TbBrandCss3 className='align-middle'/> CSS</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-familiar badge-animate _10 align-middle"><TbBrandHtml5 className='align-middle'/> HTML</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-average badge-animate _12 align-middle"><RiBootstrapLine className='align-middle'/> Bootstrap</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-average badge-animate _14 align-middle"><BsGit className='align-middle'/> Git</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-average badge-animate _16 align-middle"><SiChakraui className='align-middle'/> ChakraUI</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-less badge-animate _18 align-middle"><DiSass className='align-middle'/> Sass</span></span>
    <span className="badge-animate-2"><span className="badge text-bg-light badge-less badge-animate _20 align-middle"><TbBrandPython className='align-middle'/> Python</span></span>
    </>
  )
}

export default Skillset