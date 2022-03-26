import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display:block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  // transform:translate(-50%,-50%)
`;
const Modal = (props) => {
  console.log('Modal rerenders')
  return <ModalWrapper>{props.children}</ModalWrapper>
};

export default Modal;
