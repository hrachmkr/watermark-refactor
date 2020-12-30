import React from "react";
import Opacity from "./editor-opacity/index";
import Mode from "./editor-mode/index";
import Position from "./editor-position/index";
import Padding from "./editor-padding/index";
import Logo from "./logo/index";
import { useSelector } from "react-redux";
import * as Styled from "./styled";

function LogoEditor() {
  const modeType = useSelector((state) => state.editorType.mode);

  return (
    <Styled.LogoEditorWrapper>
      <Logo />
      <Opacity />
      <Mode />
      {modeType === "single" && <Position />}
      {modeType === "tiled" && <Padding />}
    </Styled.LogoEditorWrapper>
  );
}

export default LogoEditor;
