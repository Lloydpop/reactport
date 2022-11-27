import React from 'react'
import { useState, useEffect } from 'react';
import StyledLink from './Navlink'
export default function Hambugar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(isActive => !isActive);
  };
  let toggleClassCheck=isActive ? "active" :"";
  return (
    <div className={`Hambugar me-3 ${toggleClassCheck}`} onClick={handleClick}>
        <span className='d-block'></span>
        <span className='d-block'></span>
        <span className='d-block'></span>
        <div className="small-nav d-block d-sm-block d-md-block d-lg-none">
              <ul className="">
                <li className=""><StyledLink to="/home" variant="color">home</StyledLink></li>
                <li className=""><StyledLink to="/about" variant="color">about</StyledLink></li>
                <li className=""><StyledLink to="/work" variant="color">work</StyledLink></li>
                <li className=""><StyledLink to="/contact" variant="color">contact</StyledLink></li>
              </ul>
              </div>
    </div>
  )
}
