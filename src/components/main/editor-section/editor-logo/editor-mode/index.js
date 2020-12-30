import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { singleTiled } from "../../../../../redux/actions/index";

function Mode() {
  const modeType = useSelector((state) => state.editorType.mode);
  const typeValue = useSelector((state) => state.editorType.type);
  const dispatch = useDispatch();

  return (
    <Styled.TiledModeWrapper typeValue={typeValue}>
      <Styled.TiledModeTitle >Tiled mode</Styled.TiledModeTitle>
      <Styled.CheckBoxWrapper modeType={modeType} >
        <Styled.CheckBox
          id="checkbox"
          type="checkbox"
          onChange={singleTiled}
        />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
    </Styled.TiledModeWrapper>
  );
}

export default Mode;
