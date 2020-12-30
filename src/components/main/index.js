import React from 'react';
import * as Styled from "./styled";
import Canvas from "./canvas-section/index";
import Editor from './editor-section/index';

function Main() {
    
    return (
      <Styled.MainWrapper>
          <Editor/>
          <Canvas/>
      </Styled.MainWrapper>
    );
  }
  
  export default Main;