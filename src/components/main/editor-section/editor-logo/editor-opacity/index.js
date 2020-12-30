import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { opacity } from "../../../../../redux/actions/index";

function Opacity() {
  const opacityValue = useSelector((state) => state.editorType.opacity);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(opacity(Number(e)));

  return (
    <Styled.OpacityWrapper>
      <Styled.OpacityTitle>Opacity</Styled.OpacityTitle>
      <Styled.OpacitySlider
        type="range"
        value={opacityValue}
        min="0"
        max="100"
        step="1"
        onChange={(e) => handleChange(e.target.value)}
      ></Styled.OpacitySlider>
    </Styled.OpacityWrapper>
  );
}

export default Opacity;
