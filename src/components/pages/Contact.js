import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {StyledButton, StyledInput, StyledMessage} from '../input/Input'
const StyledForm=styled.form`
background-color:white;
width:100%;
@media screen and (min-width:700px) {
  width:500px;
  margin:auto ;
}

box-shadow: 2px 2px 8px rgba(128, 129, 128, 0.904) inset, -2px -2px 8px rgba(128, 129, 128, 0.904) inset;
`
export default function Contact() {
  return (
    <motion.div style={{marginTop:"110px"}} className="pt-sm-2 pt-md-2 pt-lg-5 pt-2  px-5"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <h1 className='head text-center mb-5'>contact....</h1>
        <div className="c-img">
          <img src="/img/screen.png" alt="" className='w-100'/>
          <div className='p-text text-center'>
             <p className=''>a front-end web developer</p>
             <marquee behavior="" direction="">
                  <p>let us connect.....</p>
             </marquee>
          </div>
        </div>
        <div className="forms">
          
            <StyledForm action="" className='pb-4'>
            <div className="contact-a d-flex justify-content-between py-3 px-3">
          <a href="">
            <img src="/img/tweet2me.png" alt="" width="40px"/>
          </a>
          <a href="">
            <img src="/img/facebook2me.png" alt="" width="42px"/>
          </a>
          <a href="">
            <img src="/img/link2me.png" alt="" width="40px"/>
          </a>
          <a href="">
            <img src="/img/git.png" alt="" width="40px"/>
          </a>
        </div>
                <p className='text-center fs-2 text-capitalize  pt-4 talk'>let's talk now</p>
                <div className="form-element px-4">
                  <div className="inputs">
                    <StyledInput placeholder='Full-Name'/>
                  </div>
                  <div className="inputs">
                    <StyledInput placeholder='Email-Address'/>
                  </div>
                  <div className="inputs">
                    <StyledMessage placeholder='want to collaborate?, send a message....'/>
                  </div>
                  <div className="inputs text-center mt-3">
                    <StyledButton className='btn'>send message</StyledButton>
                  </div>
                </div>
            </StyledForm>
        </div>
    </motion.div>
  )
}
