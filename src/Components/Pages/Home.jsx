import {useState, useEffect} from "react";
import "./Home.scss";
import { LogoC,  LogoY, LogoCY } from "../Logo";
import { useNavigate } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = ({setActivePage}) => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const greetArray = ["H","i","!"," ","I","'","m"]
  const nameArrayC = ['H','U','N'," "]
  const nameArrayY = ["O","N","G"]
  const jobArray = ["W","e","b"," ","d","e","v","e","l","o","p","e","r"]
   const navigate= useNavigate()

   useEffect (() => {
    setActivePage("home")
    document.title = "Home"
  }, [])
  return (
    <>
    <div className="container-home" >
      <div className="container-home-body">
        <div className="home-text top-text">
          <h1 ><AnimatedLetters letterClass={letterClass} strArray={greetArray} idx={10}/></h1>
        </div>
        <div className="name">
          <div className="flex hstack top-text">
            <div className="inline-logo">
              <LogoC/>
            </div>
            <AnimatedLetters letterClass={letterClass} strArray={nameArrayC} idx={17}/>
          </div>
        <div className="flex hstack">
          <div className="inline-logo">
            <LogoY/>
          </div>
          <AnimatedLetters letterClass={letterClass} strArray={nameArrayY} idx={22}/>
        </div>  
      </div>
      <h2 className="home-text-2"><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25}/></h2>
      <button className="flat-button" onClick={() => navigate("/contact")}>CONTACT ME</button>
    </div>

    <div className="container-home-icon" >
       <LogoCY/>
     </div>
  </div>
  <Loader type="pacman"/>
  </>
  );
};

export default Home;
