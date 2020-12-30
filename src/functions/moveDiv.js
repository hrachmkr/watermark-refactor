import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLeftValue, setTopValue } from "../redux/actions/index";

let offsetX = 0;
let offsetY = 0;


const useMouseEvent = (e) =>{
 
  const dispatch = useDispatch();
  const topValue = useSelector((state) => state.panelType.imageCropParams.top);
  const leftValue = useSelector(
    (state) => state.panelType.imageCropParams.left
  );


  const stopMove = () => {
    window.removeEventListener("mousemove", move);
  };

  useEffect(() => {
    window.addEventListener("mousedown", startMove);
    return () => {
      window.removeEventListener("mousedown", startMove);
    };
  }, [e]);

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
return startMove
}
export default useMouseEvent;
