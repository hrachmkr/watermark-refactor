import React from "react";
import * as Styled from "./styled";
import {Header} from "./components/header/index";
import Main from "./components/main/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <Styled.AppWrapper>
      <Header />
      <Main />
      <Footer />
    </Styled.AppWrapper>
  );
}

export default App;
