import styled from "styled-components";

export const SizeColorWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dee3f0;
padding:5px 0px;
  justify-content: center;
  align-items: center;
  display: grid;
    grid-gap: 16px;
    grid-template-columns: auto auto auto;
`;

export const SizeLabel = styled.label`
  font: normal normal 500 12px/15px Montserrat;
  color: #7683a8;
`;

export const SizeSlider = styled.input`
  height: 3px;
  width: 154px;
  cursor: pointer;
`;

export const ColorWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 5px;
  overflow: hidden;
`;

export const ColorSwitch = styled.input`
  cursor: pointer;
  margin: -6px;
  position: absolute;
  width: 45px;
  height: 45px;
`;
