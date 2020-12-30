import React from "react";
import * as Styled from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { setFont } from "../../../../../redux/actions/index";
import { fontItems } from "../../../../../constants";

function Font() {
  const dispatch = useDispatch();
  const fontValue = useSelector((state) => state.editorType.fontPath);

  const handleChange = (e) => {
    dispatch(setFont(e));
  };

  return (
    <Styled.TextFontWrapper>
      <Styled.TextLabel>Font</Styled.TextLabel>
      <Styled.TextFont>
        <Styled.SelectFont
          onChange={(e) => handleChange(e.target.value)}
          fontValue={fontValue}
        >
          {fontItems.map((item, index) => (
            <Styled.Option value={item.value} key={index}>
              {item.value}
            </Styled.Option>
          ))}
        </Styled.SelectFont>
      </Styled.TextFont>
    </Styled.TextFontWrapper>
  );
}

export default Font;
