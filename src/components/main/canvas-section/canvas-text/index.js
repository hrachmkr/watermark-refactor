import React, {useEffect} from "react";
import * as Styled from "./styled";
import { useSelector,useDispatch } from "react-redux";
import {
  setWidth,
  setHeight,
  setLeftValue,
  setTopValue,
} from "../../../../redux/actions/index";
import { count, resizersItems,minimum_size } from "../../../../constants";

let offsetX=0;
let offsetY=0;
let divWidth = 0;
let divHeight = 0;
let mouseX = 0;
let mouseY = 0;
let resizeValue = "";

function TextWindow() {
  const dispatch = useDispatch();
  const widhtValue = useSelector((state) => state.editorType.imageCropParams.width);
  const heightValue = useSelector((state) => state.editorType.imageCropParams.height);
  const textValue = useSelector((state) => state.editorType.value);
  const modeType = useSelector((state) => state.editorType.mode);
  const paddingValue = useSelector((state) => state.editorType.padding);
  const topValue = useSelector((state) => state.editorType.imageCropParams.top);
  const leftValue = useSelector((state) => state.editorType.imageCropParams.left);
  const fontSizeValue = useSelector(state=>state.editorType.fontSize);
  const colorValue = useSelector(state=>state.editorType.color);
  const fontValue = useSelector(state=>state.editorType.fontPath);

  const [isMouseDownFired, setIsMouseDownFired] = useState(false)

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
      const increase = Math.max(pathX,pathY);
      const height = divHeight + increase;
      const width = divWidth + increase;

      if(width > minimum_size ){
        dispatch(setHeight(height + "px"));
        dispatch(setWidth(width + "px"));
      }
  }};

  const stopResize = () => window.removeEventListener("mousemove", resize);
 
  const move = (e) => {
    dispatch(setTopValue(e.clientY - offsetY + "px"));
    dispatch(setLeftValue(e.clientX - offsetX + "px"));
  };

  const startMove = (e) => {
    // window.removeEventListener("mousedown", startMove);
    // offsetX = e.clientX - parseFloat(leftValue);
    // offsetY = e.clientY - parseFloat(topValue);
    // window.addEventListener("mousemove", move);
    // window.addEventListener("mouseup", stopMove);
  };

  const onMouseDown = () => {
    if(!isMouseDownFired) {
      setIsMouseDownFired(true)
    }
  }

  const onMouseUp = () => {
    if(isMouseDownFired) {
      setIsMouseDownFired(false)
    }
  }

  const onMouseMove = () => {

  }

  useEventListener('mousedown', onMouseDown)
  useEventListener('mouseup', onMouseUp)
  useEventListener('mousemove', onMouseMove)

  return (
    <Styled.TextWindowWrapper>
      {modeType === "single" && (
        <Styled.TextSingleWrapper
          topValue={topValue}
          leftValue={leftValue}
          fontSizeValue={fontSizeValue}
          colorValue = {colorValue}
          widhtValue={widhtValue}
          heightValue={heightValue}
        >
         <Styled.TextSingle           fontValue = {fontValue}
 onMouseDown={(e) => startMove(e)}>{textValue}</Styled.TextSingle>
          {resizersItems.map((item, index) => (
            <Styled.Resizer
              style={item.style}
              key={index}
              value={item.value}
              onMouseDown={(e) => startResize(e)}
            ></Styled.Resizer>
          ))}
        
        </Styled.TextSingleWrapper>
      )}
      {modeType === "tiled" && (
        <Styled.TextTiled >
          {[...Array(count)].map((el, ind) => (
            <Styled.Text paddingValue={paddingValue}  fontSizeValue={fontSizeValue}
            colorValue = {colorValue}
            fontValue = {fontValue} key={ind}>{textValue}</Styled.Text>
          ))}
        </Styled.TextTiled>
      )}
    </Styled.TextWindowWrapper>
  );
}

export default TextWindow;
