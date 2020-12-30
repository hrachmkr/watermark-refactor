import React from "react";
import * as Styled from "./styled";
import Mode from "../editor-logo/editor-mode/index";
import Position from "../editor-logo/editor-position/index";
import Padding from "../editor-logo/editor-padding/index";
import Text from "./editor-text/index";
import SizeColor from "./editor-size-color/index";
import Font from "./editor-font/index";
import { useSelector } from "react-redux";

function TextEditor() {
  let modeType = useSelector((state) => state.editorType.mode);

  return (
    <Styled.TextEditorlWrapper>
      <Text />
      <SizeColor />
      <Font />
      <Mode />
      {modeType === "single" && <Position />}
      {modeType === "tiled" && <Padding />}
    </Styled.TextEditorlWrapper>
  );
}

export default TextEditor;
