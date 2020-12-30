import styled from "styled-components";

export const FooterWrapper = styled.footer`
width: 100%;
background: rgba(207, 224, 255, 0.23);
display:flex;
justify-content: center;
align-items: center;
border-top: 1px solid #DEE3F0;
padding:36px 0px;
`

export const CancelButton = styled.button`
 margin-right:48px;
outline: none;
border:none;
font: 14px Montserrat, sans-serif;
color:rgba(79, 139, 255, 0.5);
background:transparent;
cursor:pointer;
&:hover{
    color:rgba(79, 139, 255, 1);
}
`

export const DoneButton = styled.button`
width: 104px;
height: 40px;
outline: none;
border:none;
background: transparent linear-gradient(180deg,#5690FF 0%,#387DFF 100%);
box-shadow: 0px 3px 9px #387DFF80;
border-radius: 25px;
opacity: 0.8;
cursor:pointer;
color: white;
font: 14px Montserrat, sans-serif;
text-align:center;
&:hover{
    opacity:1;
}
`
