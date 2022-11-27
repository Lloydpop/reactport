import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom";
import Work from './pages/Work';
import Contact from './pages/Contact'
import Home from './pages/Home';
import About from './pages/About';
import {AnimatePresence} from "framer-motion"

export default function AnimatedRoutes() {
    const location=useLocation()
    return(
    <div>
      <AnimatePresence>
          <Routes location={location} key={location.pathname}>
        <Route  path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
    </div>
  )
};