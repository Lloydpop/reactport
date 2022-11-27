import React from 'react'
import {motion} from "framer-motion"
import styled from 'styled-components'
const  StyledH1=styled.h2`
font-weight:bolder;
`
export default function Home() {
  return (
    <motion.div className='home ' style={{height:"auto", marginTop:"120px"}}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <div className="d-flex align-items-center justify-content-lg-between d-flex justify-content-md-center d-flex justify-content-sm-center d-flex justify-content-center flex-sm-column flex-md-column flex-lg-row flex-column main">
        <div className='d-flex align-items-center flex-sm-column flex-md-column flex-lg-row flex-column'>
            <div className='me  ms-5 mb-3'>
                <img src="./img/image0.jpeg" alt=""  width="80"/>
            </div>
            <div className='text-capitalize ms-3 text-center text-sm-center text-md-center text-lg-start'>
                <StyledH1>chizuruoke_perfection</StyledH1>
                <p className='fs-5'>front-end web developer</p>
                <p className='fs-5'>open to freelancing from november</p>
                <p className='pp fs-3'>2022 <img src="./img/star.png" alt="" width="30px"  className='star'/> ....</p>
                <div>
                    <a href="" className='cv m-auto m-sm-auto m-md-auto m-lg-0'>download cv</a>
                </div>
            </div>
        </div>
        <div className='coder mt-3 text-center text-sm-center text-md-center text-lg-start'>
        <StyledH1 className='pd'>coder</StyledH1>
            <p className='fs-5 brief'>I am a front-end web developer based in Nigeria. I have a good knowledge Of building beautiful digital web applications. I love minimal and brutalist design.i love fashion, art and music<img src="./img/head.png" alt="" width="25px" className='ms-1 star'/> <span className='fs-3'>....</span></p>
            <div className='text-capitalize'>
                    <a href="#contact" className='cv m-auto m-sm-auto m-md-auto m-lg-0'>contact me</a>
                </div>
        </div>
        </div>
    </motion.div>
  )
}
