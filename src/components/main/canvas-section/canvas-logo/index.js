import React, { useEffect } from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  setWidth,
  setHeight,
  setLeftValue,
  setTopValue,
} from "../../../../redux/actions/index";
import { count, resizersItems, minimum_size } from "../../../../constants";
// import useMouseEvent from "../../../../functions/moveDiv"

let offsetX = 0;
let offsetY = 0;
let divWidth = 0;
let divHeight = 0;
let mouseX = 0;
let mouseY = 0;
let resizeValue = "";

function LogoWindow() {
  const dispatch = useDispatch();

  const opacityValue = useSelector((state) => state.editorType.opacity);
  const modeType = useSelector((state) => state.editorType.mode);
  const paddingValue = useSelector((state) => state.editorType.padding);
  const topValue = useSelector((state) => state.editorType.imageCropParams.top);
  const leftValue = useSelector(
    (state) => state.editorType.imageCropParams.left
  );
  const widhtValue = useSelector(
    (state) => state.editorType.imageCropParams.width
  );
  const heightValue = useSelector(
    (state) => state.editorType.imageCropParams.height
  );

  const startResize = (e) => {
    window.removeEventListener("mousedown", startResize);
    resizeValue = e.target.attributes.value.value;
    divWidth = parseFloat(widhtValue);
    divHeight = parseFloat(heightValue);
    mouseX = e.clientX;
    mouseY = e.clientY;
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  const resize = (e) => {
    if (resizeValue === "bottom-right") {
      const pathY = e.clientY - mouseY;
      const pathX = e.clientX - mouseX;
      const increase = Math.max(pathX, pathY);
      const height = divHeight + increase;
      const width = divWidth + increase;
      if (width > minimum_size) {
        dispatch(setHeight(height + "px"));
        dispatch(setWidth(width + "px"));
      }
    }
  };

  const stopResize = () => window.removeEventListener("mousemove", resize);


  const move = (e) => {
    dispatch(setTopValue(e.clientY - offsetY + "px"));
    dispatch(setLeftValue(e.clientX - offsetX + "px"));
  };

  const startMove = (e) => {
    window.removeEventListener("mousedown", startMove);
    offsetX = e.clientX - parseFloat(leftValue);
    offsetY = e.clientY - parseFloat(topValue);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stopMove);
  };

  const stopMove = () => {
    window.removeEventListener("mousemove", move);
  };

  useEffect(() => {
    window.addEventListener("mousedown", startMove);
    return () => {
      window.removeEventListener("mousedown", startMove);
    };
  }, []);


  return (
    <Styled.LogoWindowWrapper>
      {modeType === "single" && (
        <Styled.LogoSingleWrapper
          topValue={topValue}
          leftValue={leftValue}
          opacityValue={opacityValue}
          widhtValue={widhtValue}
          heightValue={heightValue}
        >
          <Styled.LogoSingleImg
            onMouseDown={(e) => startMove(e)}

          ></Styled.LogoSingleImg>
          {resizersItems.map((item, index) => (
            <Styled.Resizer
              style={item.style}
              key={index}
              value={item.value}
              onMouseDown={(e) => startResize(e)}
            ></Styled.Resizer>
          ))}
        </Styled.LogoSingleWrapper>
      )}
      {modeType === "tiled" && (
        <Styled.LogoTiled opacityValue={opacityValue}>
          {[...Array(count)].map((el, ind) => (
            <Styled.Logo paddingValue={paddingValue} key={ind}></Styled.Logo>
          ))}
        </Styled.LogoTiled>
      )}
    </Styled.LogoWindowWrapper>
  );
}

export default LogoWindow;
