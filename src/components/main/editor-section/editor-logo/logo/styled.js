import styled from "styled-components";
import iconBgrnd from "../../../../../img/icon-background.png";



export const LogoWrapper = styled.div`
width:100%;
border-bottom: 1px solid #DEE3F0;
display: flex;
justify-content: center;
// align-items: center;
padding: 24px 0px;
`

export const LogoBackgroundCircle = styled.div`
border: 2px solid rgba(222, 227, 240, 0.34);
border-radius: 50%;
width: 87px;
height: 87px;
background: transparent url('${iconBgrnd}') 0% 0% no-repeat padding-box;
// margin:24px 100px;
display: flex;
justify-content: center;
align-items: center;
`

export const LogoImg = styled.div`
width:45px;
height:68px;
background-image:url('https://www.flaticon.com/svg/static/icons/svg/3897/3897941.svg');
background-repeat:no-repeat;
background-size:contain;
`



