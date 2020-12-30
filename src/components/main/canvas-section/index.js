import React from "react";
import * as Styled from "./styled";
import { useSelector } from "react-redux";
import LogoWindow from "./canvas-logo/index";
import TextWindow from "./canvas-text/index";


function Canvas() {
  let canvasType = useSelector((state) => state.editorType.type);
  return (
    <Styled.CanvasWrapper>
      <Styled.CanvasEditSection>
      {canvasType === "img" && <LogoWindow />}
      {canvasType === "text" && <TextWindow />}
      </Styled.CanvasEditSection>
    </Styled.CanvasWrapper>
  );
}

export default Canvas;
