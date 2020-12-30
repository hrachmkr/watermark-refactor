import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {setValue} from "../../../../../redux/actions/index"


function Text() {
    const dispatch = useDispatch();
    let textValue = useSelector(state=>state.editorType.value)
    let countOfCharacters = textValue.length;
    
    const handleChange=(x)=>{
        dispatch(setValue(x))
    };

  
    return (
        <Styled.TextInputWrapper>
            <Styled.Text   placeholder=" text" maxLength = "42" onChange={(e)=>handleChange(e.target.value)}></Styled.Text>
            <Styled.TextComment>{countOfCharacters}/42 characters advised</Styled.TextComment>
        </Styled.TextInputWrapper>
    );
  }
  export default Text;


