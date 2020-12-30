import React from 'react'
import {connect} from 'react-redux'

import * as Styled from './styled'

import { toggleEditingMode} from "../../../../redux/actions/index";
import arrowIcon from "../../../../img/path.png";

const EmptyCase = React.memo((props) => {

  const {toggleEditingMode} = props

  return (
    <Styled.EditorWrapper>
      <Styled.EditorLogoButton onClick={() => toggleEditingMode("img")}>
        <Styled.Icon src={arrowIcon} alt="arrow icon"></Styled.Icon>
          UPLOAD YOUR LOGO
      </Styled.EditorLogoButton>
      <Styled.Block>
        <Styled.BlockName>or</Styled.BlockName>
      </Styled.Block>
      <Styled.TextEditorWrapper onClick={() => toggleEditingMode("text")}>
        Type Text
      </Styled.TextEditorWrapper>
    </Styled.EditorWrapper>
  )
})

export default connect(null, {toggleEditingMode})(EmptyCase)