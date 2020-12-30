import styled from "styled-components";

export const TextFontWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dee3f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12.5px 0px;
`;
export const TextLabel = styled.label`
  font: normal normal 500 12px/15px Montserrat;
  margin-right: 14px;
  color: #7683a8;
`;

export const TextFont = styled.div`
  max-width: 204px;
  width: 100%;
  height: 40px;
`;

export const SelectFont = styled.select`
  outline: none;
  border: none;
  width: 100%;
  height: 40px;
  background: #eef5ff;
  font-size: large;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  font-family: "${(props) => props.fontValue}";
  cursor: pointer;
`;
export const Option = styled.option`
  background: #eef5ff 0% 0% no-repeat padding-box;
  border: 1px solid #dde3f0;
  border-radius: 10px;
  opacity: 1;
  height: 40px;
  font-size: 20px;
  font-family: "${(props) => props.value}";
  cursor: pointer;
`;
