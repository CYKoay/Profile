import React,{useState, useEffect} from 'react'
import "./Contact.scss"
import AnimatedLetters from "../AnimatedLetters"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {useForm} from "react-hook-form"
import { useRef } from 'react'
import emailjs from "@emailjs/browser"
import { AiFillGithub } from "react-icons/ai"
import {ImProfile} from "react-icons/im"
import {BiSolidChevronsDown} from "react-icons/bi"
import Loader from 'react-loaders'

const schema = z.object({
  subject: z.string().min(1,{message: "This field is required"}),
  email: z.string().min(1,{message: "This field is required"}),
  message: z.string().min(1,{message: "This field is required"}),
  name: z.string().min(1,{message: "This field is required"}),
})

const Contact = ({setActivePage}) => {
  const contactStr = ["C","O","N","T","A","C","T"," ","M","E"  ]
  const [letterClass, setLetterClass] = useState("text-animate")
  const formRef = useRef(null)
  useEffect (() => {
    setActivePage("contact")
    document.title="Contact"
  }, [])
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm({resolver: zodResolver(schema)})

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
    .sendForm(
      "service_everpyi",
      "template_v2kiqhq",
      formRef.current,
      "0J3RiYFYeQ2nYp3c-"
      )
      .then(() => {
        alert("Message successfully sent!")
        console.log("sent")
        window.location.reload(false)
      },
      (err) => {
        console.log(err)
        alert("Failed to send the message, please try again!")
      }
      )

  }

  return (
    <>
    <div className="contact-container">
      <div className="contact-left">
        <div className="left-content">
          <div className="left-title">
            <AnimatedLetters strArray={contactStr} idx={10} letterClass={letterClass}/>
          </div>
        <div className="left-message">
          Let's chat.
          <br/>
          Tell me more about the opportunity.
        </div>
        <div className="left-info">
          <a href="" target='_blank' ><ImProfile className='align-middle'/><span className='align-middle left-btn'>Resume</span></a>
          <a href="https://github.com/CYKoay" target='_blank'><AiFillGithub  className='align-middle '/><span className="align-middle left-btn">GitHub</span></a>
        </div>
        </div>
        <div className="show-sm">
          <BiSolidChevronsDown/>
          <br/>
          Get In Touch
        </div>
      </div>
      <div className="contact-right">
        <div className="email-form">
          <form ref={formRef} onSubmit={handleSubmit(() =>
            sendEmail)}>
              <h3>Drop me a message!</h3>
              <label htmlFor="name">Name:</label>
              <br/>
            <input placeholder="Name" name="name" type="text" {...register("name")}/>
            {errors.name?.message && <p className='error-msg'>{errors.name.message}</p>}
            <label htmlFor="email">E-mail:</label>
              <br/>
            <input placeholder="E-mail" name="email" type="email" {...register("email")}/>
            {errors.email?.message && <p className='error-msg'>{errors.email.message}</p>}
            <label htmlFor="subject">Subject:</label>
              <br/>
            <input placeholder="Subject" name="subject" type="text" {...register("subject")}/>
            {errors.subject?.message && <p className='error-msg'>{errors.subject.message}</p>}
            <label htmlFor="Message">Message:</label>
              <br/>
            <textarea placeholder="Message" name="message" type="text" {...register("message")}/>
            {errors.message?.message && <p className='error-msg'>{errors.message.message}</p>}
            <button type="submit" className='button'>Contact Me!</button>
          </form>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Contact