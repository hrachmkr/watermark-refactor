import React from 'react';
import {connect} from 'react-redux'
import * as Styled from "./styled";
import { clear} from "../../redux/actions/index";

const Footer = (props) => {
  const {data,clear} = props

    return (
      <Styled.FooterWrapper>
         <Styled.CancelButton onClick={clear}>Cancel</Styled.CancelButton>
         <Styled.DoneButton onClick={() => console.log(data)}>Done</Styled.DoneButton>
      </Styled.FooterWrapper>
    );
  }
  
  
  const mapStateToProps = (state) => ({
    data: getEditortype(state) 
  })

  export default connect(mapStateToProps, { clear })(Footer)
