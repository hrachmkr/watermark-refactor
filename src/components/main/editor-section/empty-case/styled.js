import styled from "styled-components";

export const EditorWrapper = styled.div`
  border-right: 1px solid #dee3f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 290px;
    width: 100%;
    height: 100%;
    padding:138px 0px;

`;
export const EditorLogoButton = styled.button`
  white-space: nowrap;
  outline: none;
  border: none;
  background-color: rgba(56, 125, 255, 0.8);
  box-shadow: 0px 3px 9px #387dff80;
  border-radius: 25px;
  cursor: pointer;
  padding: 11px 20px 11px 24px;
  font: 500 14px/18px Montserrat;
  color: #ffffff;
  &:hover {
    background-color: rgba(56, 125, 255, 1);
  }
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
  padding-right: 12px;
  margin: -2px;
`;

export const TextEditorWrapper = styled.button`
  outline: none;
  border: none;
  white-space: nowrap;
  background: rgba(79, 139, 255, 0.1) 0% 0% no-repeat padding-box;
  color: rgba(56, 125, 255, 0.8);
  border-radius: 5px;
  opacity: 0.5;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 19px;
  // margin: 20px 92px 139px;
  &:hover {
    opacity: 1;
  }
`;

export const Block = styled.div`
  text-align: center;
  margin:27px 0px 21px 0px;

`;

const posAbsolutBlock =  `display: inline-block;
width: 80px;
height: 1px;
top: 50%;
content: "";
position: absolute;`

export const BlockName = styled.span`
  position: relative;
  text-align: center;
  font: bold 14px Montserrat;
  padding: 0px 1px;
  color: rgba(84, 95, 126, 1);
  &:before {
    ${posAbsolutBlock};
    background: transparent
      linear-gradient(
        270deg,
        rgba(193, 201, 224, 1) 0%,
        rgba(193, 201, 224, 0) 100%
      );
    right: 24px;
    
  }
  &:after {
    ${posAbsolutBlock};
    background: transparent
      linear-gradient(
        90deg,
        rgba(193, 201, 224, 1) 0%,
        rgba(193, 201, 224, 0) 100%
      );
    left: 24px;
  }
`;
