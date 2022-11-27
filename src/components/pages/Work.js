import React from 'react'
import {motion} from "framer-motion"
export default function Work() {
  return (
    <motion.div style={{height:"auto", marginTop:"100px"}} className="pt-sm-2 pt-md-2 pt-lg-5 pt-2 container px-5"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <h1 className='text-center head mb-5'>my work....</h1>
        <p className='text-center fs-4 text-capitalize text-decoration-underline mb-4'>here is a few of my work</p>
        <div className='row work gap-5 justify-content-center'>
            <div className="col-12 col-md-12 col-sm-12 col-lg-5">
            <img src="/img/net.png" alt="" className='w-100'/>
            <aside className="d-flex justify-content-between px-3">
              <p>netflix clone</p>
              <a href="">visit website...</a>
            </aside>
            <p className='open'>open</p>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-lg-5">
                <img src="/img/cappen3.png" alt="" className='w-100'/>
                <aside className="d-flex justify-content-between px-3">
              <p>cappen clone</p>
              <a href="">visit website...</a>
            </aside>
            <p className='open'>open</p>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-lg-5">
                <img src="/img/hhv5.png" alt="" />
                <aside className="d-flex justify-content-between px-3">
              <p>hhv streetwear clone</p>
              <a href="">visit website...</a>
            </aside>
            <p className='open'>open</p>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-lg-5">
                <img src="/img/hostinger3.png" alt="" />
                <aside className="d-flex justify-content-between px-3 fs-6">
              <p>hostinger clone</p>
              <a href="">visit website...</a>
            </aside>
            <p className='open'>open</p>
            </div>
        </div>
    </motion.div>
  )
}
