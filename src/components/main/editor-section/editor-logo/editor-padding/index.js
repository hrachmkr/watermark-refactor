import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { padding } from "../../../../../redux/actions/index";

function Padding() {
  const paddingValue = useSelector((state) => state.editorType.padding);
  const dispatch = useDispatch();
  const typeValue = useSelector((state) => state.editorType.type);

  const handleChange = (e) => dispatch(padding(Number(e)));
  return (
    <Styled.PaddingWrapper typeValue={typeValue}>
      <Styled.PaddingTitle>Padding</Styled.PaddingTitle>
      <Styled.PaddingSlider
        type="range"
        value={paddingValue}
        min="0"
        max="100"
        step="1"
        onChange={(e) => handleChange(e.target.value)}
      ></Styled.PaddingSlider>
    </Styled.PaddingWrapper>
  );
}

export default Padding;
