import React from 'react'
import {motion} from "framer-motion"
export default function About() {
  return (
    <motion.div style={{marginTop:"110px"}} className="pt-sm-2 pt-md-2 pt-lg-5 pt-2  px-5"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1 className='head text-center mb-5'>about....</h1>
       <div className="d-flex justify-content-between flex-column flex-sm-column flex-md-column flex-lg-row px-4">
          <div className='ex text-sm-center text-md-center text-center text-lg-start'>
            <span>me, myself and i....</span>
            <p className='fs-5 article'>Hi, i'm perfection chizuruoke but no ounce of it shows,  nice to meet you.since the begining of my journey as a front-end web developer over a year, i have done remote works and now i am looking to collaborate with talented people to create digital products for both business and consumer use.i'm quietly confident, naturally curious, and perpetually working on improving my chops one code problem at a time........ 


            </p>
          </div>
          <div className='ex skill-load'>
            <span className='text-sm-center text-md-center text-center text-lg-start d-block mb-3'>my skills....</span>
             <ul>
              <li className='fs-3 d-flex align-items-center justify-content-between mb-4'>HTML5
               <div className=''>
                <img src="./img/html.png" width="30px" alt="" />
               </div>
              </li>
              <li className='fs-3 d-flex align-items-center justify-content-between mb-4'>CSS3
                  <div className=''>
                  <img src="./img/css.png" width="35px" alt="" />
                    </div> 
              </li>
              <li className='fs-3 text-capitalize d-flex align-items-center justify-content-between mb-4'>REACT
                 <div className=''>
                  <img src="./img/logo.svg" width="50px" alt="" />
                 </div>
              </li>
              <li className='fs-3 d-flex align-items-center justify-content-between mb-4'>BOOTSTRAP
                 <div>
                  <img src="/img/bootstrap.ico" width="40px" alt="" />
                 </div>
              </li>
              <li className='fs-3 d-flex align-items-center justify-content-between mb-4'>FIREBASE
                 <div>
                 <img src="/img/fire.webp" width="40px" alt="" />
                 </div>
              </li>
             </ul>
          </div>
       </div>
    </motion.div>
  )
}
