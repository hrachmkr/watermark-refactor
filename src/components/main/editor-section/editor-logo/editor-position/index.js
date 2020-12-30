import React from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setTopValue, setLeftValue } from "../../../../../redux/actions/index";

function Position() {
  const dispatch = useDispatch();

  const typeValue = useSelector((state) => state.editorType.type);
  const canvasW = useSelector((state) => state.editorType.canvasWidth);
  const canvasH = useSelector((state) => state.editorType.canvasHeight);
  const imgW = parseFloat(
    useSelector((state) => state.editorType.imageCropParams.width)
  );
  const imgH = parseFloat(
    useSelector((state) => state.editorType.imageCropParams.height)
  );

  const moveTopLeft = () => {
    dispatch(setTopValue("0px"));
    dispatch(setLeftValue("0px"));
  };

  const moveTopRight = () => {
    dispatch(setTopValue("0px"));
    dispatch(setLeftValue(`${canvasW - imgW}px`));
  };
  const moveBottomLeft = () => {
    dispatch(setTopValue(`${canvasH - imgH}px`));
    dispatch(setLeftValue("0px"));
  };
  const moveBottomRight = () => {
    dispatch(setTopValue(`${canvasH - imgH}px`));
    dispatch(setLeftValue(`${canvasW - imgW}px`));
  };

  return (
    <Styled.PanelPositionWrapper>
      <Styled.PositionTitle typeValue={typeValue}>
        Position
      </Styled.PositionTitle>
      <Styled.PositionDivs>
        <Styled.PositionTopLeft onClick={moveTopLeft}></Styled.PositionTopLeft>
        <Styled.PositionTopRight onClick={moveTopRight}></Styled.PositionTopRight>
        <Styled.PositionBottomLeft onClick={moveBottomLeft}></Styled.PositionBottomLeft>
        <Styled.PositionBottomRight onClick={moveBottomRight}></Styled.PositionBottomRight>
      </Styled.PositionDivs>
    </Styled.PanelPositionWrapper>
  );
}

export default Position;
