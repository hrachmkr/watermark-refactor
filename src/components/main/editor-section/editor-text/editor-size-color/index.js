import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { setFontSize, setColor } from "../../../../../redux/actions/index";

function SizeColor() {
  let fontSizeValue = useSelector((state) => state.editorType.fontSize);
  let colorValue = useSelector((state) => state.editorType.color);
  const dispatch = useDispatch();

  const changeSize = (e) => dispatch(setFontSize(Number(e)));
  const changeColor = (e) => dispatch(setColor(e));

  return (
    <Styled.SizeColorWrapper>
      <Styled.SizeLabel>Size</Styled.SizeLabel>

      <Styled.SizeSlider
        type="range"
        value={fontSizeValue}
        min="0"
        max="100"
        step="1"
        onChange={(e) => changeSize(e.target.value)}
      ></Styled.SizeSlider>
      <Styled.ColorWrapper>
        <Styled.ColorSwitch
          type="color"
          value={colorValue}
          onChange={(e) => changeColor(e.target.value)}
        ></Styled.ColorSwitch>
      </Styled.ColorWrapper>
    </Styled.SizeColorWrapper>
  );
}

export default SizeColor;
