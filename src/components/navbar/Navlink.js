import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledLink=styled(Link)`
 text-decoration:none;
 font-size:${(props)=>props.variant==="color" ?"1.6rem":"1.4rem" };
 transition:0.5s;
 text-transform:capitalize;
 color:#000;
 display:flex;
 margin-bottom:5px;
 padding:10px;
 justify-content:center;
 border-radius:5%;
 letter-spacing:-1.2px;
 &:hover{
  transform:translateX(-10px);
  color:#000;
 }
`
export default StyledLink