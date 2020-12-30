import styled from "styled-components";

export const LogoWindowWrapper = styled.div`
  width: 100%;
  height:100%;
  position:relative;
`;

export const Resizer = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
`;

export const LogoSingleWrapper = styled.div.attrs((props) => ({
  style: {
    width: props.widhtValue,
    height: props.heightValue,
    top: props.topValue,
    left: props.leftValue,
    opacity: 1 - props.opacityValue / 100,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  &:hover{
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

export const LogoSingleImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/3897/3897941.svg");
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;




export const LogoTiled = styled.div`
width: 100%;
height:100%;
// max-width:630px;
// max-height:345px;
  display: flex;
  flex-wrap: wrap;
  opacity: ${(props) => 1 - props.opacityValue / 100};
  justify-content: space-around;
`;
export const Logo = styled.div`
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/3897/3897941.svg");
  background-size: contain;
  margin: ${(props) => props.paddingValue + "px"};
  width: 85px;
  height: 85px;
`;
