import styled from "styled-components";

export const TextWindowWrapper = styled.div`
  width: 100%;
  margin: 10px;
  position:relative;
`;

export const Resizer = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
`;

export const TextSingleWrapper = styled.div.attrs((props) => ({
  style: {
    width: props.widhtValue,
    height: props.heightValue,
    top: props.topValue,
    left: props.leftValue,
    fontSize:props.fontSizeValue+"px",
    color:props.colorValue,
    // fontFamily:props.fontValue,
  },
}))`
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
   position: absolute;
  &:hover {
    box-shadow: 0px 0px 3px #00000033;
    border: 1px solid #5690ff;
    box-sizing: border-box;
    ${Resizer}{
      background: #5690ff 0% 0% no-repeat padding-box;
      border: 1px solid #ffffff;
      opacity: 1;
      border-radius: 50%; 
    }
  }
`;

export const TextSingle = styled.div`
width: 90%;
height: 90%;
cursor: pointer;
font-family:'${(props) => props.fontValue}';

`


export const TextTiled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Text = styled.div`
  background-size: contain;
  margin: ${(props) => props.paddingValue + "px"};
  font-size:${(props) => props.fontSizeValue+"px"};
  color:${(props) => props.colorValue};
  font-family:'${(props) => props.fontValue}';
`;
