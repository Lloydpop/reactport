import React from 'react'
import StyledLink from './Navlink'
import Logo from './Logo'
import Hambugar from './Hambugar'
import { ThemeContext, themes } from '../Theme'
import { useState } from 'react'
export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    
    <div>
         <nav className="d-flex justify-content-between align-items-sm-center align-items-md-center align-items-lg-start align-items-center nav-bar">
                <div>
                    <Logo/>
                </div>
              <div className='d-flex align-items-center'>
              <ul className="d-none d-sm-none d-md-none d-lg-flex me-3 mt-3">
                <li className="ms-5"><StyledLink to="/home">home</StyledLink></li>
                <li className="ms-5"><StyledLink to="/about">about</StyledLink></li>
                <li className="ms-5"><StyledLink to="/work">work</StyledLink></li>
                <li className="ms-5"><StyledLink to="/contact">contact</StyledLink></li>
                <li className="ms-5 mt-3">
                </li>
              </ul>
              <div className='me-lg-5'>
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
              <div  className="switch"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
              </div>
            )}
            </ThemeContext.Consumer>
              </div>
              </div>
              <div className="d-sm-block d-block d-md-block d-lg-none">
               <Hambugar/>
              </div>
            </nav>
    </div>
  )
}
