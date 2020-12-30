import styled from "styled-components";

const switchSingleColor = (value)=>{
 if(value === "single"){
   return "rgba(84, 95, 126, 1)"
 }
   return "rgba(37, 46, 72, 0.2)";
}

const switchTiledColor = (value)=>{
  if(value === "tiled"){
    return "rgba(84, 95, 126, 1)"
  }
    return "rgba(37, 46, 72, 0.2)";
 }

 const changeSwitchModDivHeight= value=>{
  if(value === "text"){
    return "11px 0px 10px;";
  }
    return "21px 0px 23px;";
  }


export const CheckBoxWrapper = styled.div`  
position: relative;
   &:before {
    position: absolute;
    content: "Single";
    font: normal normal 600 14px/18px Montserrat;
    right: 43px;
      color: ${(props) => switchSingleColor(props.modeType)};
  }
  &:after {
    position: absolute;
    font: normal normal 600 14px/18px Montserrat;
    left: 43px;
    content: "Tiled";
    color:${(props) => switchTiledColor(props.modeType)};
  }
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 20px;
  border-radius: 15px;
  background: #497ef7;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 35px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: #497ef7;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 18px;
      transition: 0.2s;
    }
  }
`;

export const TiledModeWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dee3f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:21px 0px 23px;
  padding: ${(props) => changeSwitchModDivHeight(props.typeValue)};

`;
export const TiledModeTitle = styled.div`
  text-align: center;
  font: normal normal 500 12px/15px Montserrat;
  color: #7683a8;
  margin-bottom:16px;

`;
