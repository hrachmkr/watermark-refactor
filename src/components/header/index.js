import React from "react";
import * as Styled from "./styled";

export const Header = React.memo(() => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Title>Add Your Watermark</Styled.Title>
    </Styled.HeaderWrapper>
  );
})

