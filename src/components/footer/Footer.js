import React from 'react'
import {useState, useEffect} from 'react'
export default function Footer() {
   let hour=new Date().getHours()
   hour=(hour%12)||12;
   hour=hour<10 ? "0" + hour:hour;
   let minute=new Date().getMinutes()
   minute=minute<10 ? "0" + minute:minute
  return (
    <div className='mt-5 pt-5 text-center pb-2' id='contact'>
     <p className='fs-3 px-5'>Got a question, proposal or project you want to work together on something? feel free to reach out <span className='fs-3'>....</span></p>
     <div>
        <p className='bod'>
            <a href="" className='text-decoration-none  d-flex text-uppercase justify-content-center slide'>
                <span className='ms-3'>reach</span>
                <span className='ms-3'>out</span>
                <span  className='ms-3'>to</span>
                <span className='ms-3'>collborate</span>
                <span className='ms-3'>or</span>
                <span className='ms-3'>work</span>
                <span className='ms-3'>on</span>
                <span className='ms-3'>something....</span>
                <span className='ms-3'>reach</span>
                <span className='ms-3'>out</span>
                <span  className='ms-3'>to</span>
                <span className='ms-3'>collborate</span>
                <span className='ms-3'>or</span>
                <span className='ms-3'>work</span>
                <span className='ms-3'>on</span>
                <span className='ms-3'>something....</span>
                </a>
        </p>
     </div>
     <div className='email'>
        <p className='fs-2 '>perfectionchizuruoke@gmail.com</p>
     </div>
     <div className='socials'>
        <a href="https://twitter.com/perfectionchiz" className='text-decoration-none fs-4 text-capitalize ms-3'>twitter</a>
        <a href="" className='text-decoration-none fs-4 text-capitalize ms-3'>instagram</a>
        <a href="https://www.linkedin.com/in/ihekwoaba-perfection-820612206/" className='text-decoration-none fs-4 text-capitalize ms-3'>linkden</a>
        <a href="https://github.com/Lloydpop" className='text-decoration-none fs-4 text-capitalize ms-3'>github</a>
     </div>
     <div className='time fs-4 text-uppercase mt-3'>
        <p>lagos, ng <span>{hour}:{minute}</span></p>
     </div>
    </div>
  )
}
