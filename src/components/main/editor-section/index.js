import React from "react";
import { useSelector } from "react-redux";

import LogoEditor from "./editor-logo/index";
import TextEditor from "./editor-text/index";
import EmptyCase from "./empty-case/index";

const components = [
  {
    component: <EmptyCase />,
    key: ""
  },
  {
    component: <LogoEditor />,
    key: "img"
  },
  {
    component: <TextEditor />,
    key: "text"
  }
]


const getCurrentCompoent = (editorType) => {
  const currentComponentObj = components.find(component => component.key === editorType)
  if(currentComponentObj) {
    return currentComponentObj.component
  }
}

function Editor() {
  const editorType = useSelector((state) => state.editorType.type);
  return (
   <>
      {getCurrentCompoent(editorType)}
    </>  
  )
}

export default Editor;
