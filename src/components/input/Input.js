import styled from "styled-components";
const StyledInput=styled.input`
padding:10px;
display:block;
width:100%;
margin-bottom:20px;
&::placeholder{
    color:#000;
    font-family: 'Fraunces', serif;
    font-size:1.1rem;
}
`
const StyledMessage=styled.textarea`
min-height:300px;
width:100%;
padding:10px;
&::placeholder{
    color:#000;  
    font-family: 
    'Fraunces', serif;
    font-size:1.1rem;
    text-transform:capitalize;

}
&::-webkit-resizer{
    display:none;
}

`
const StyledButton=styled.button`
background-color:black;
color:#fff;
width:100%;
padding:12px;
text-transform:capitalize;
border-radius:0;
&:hover{
    background-color:#000;
    color:#fff;
}

`
export  {StyledInput, StyledMessage, StyledButton}