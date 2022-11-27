import React from 'react'
import styled from 'styled-components'
const StyledLogo=styled.p`
text-transform:capitalize;
letter-spacing:-1px;

`
export default function Logo() {
  return (
    <div>
       <StyledLogo className='ms-3 mt-3 fs-2'>profile.<span></span>
       </StyledLogo>
    </div>
  )
}
