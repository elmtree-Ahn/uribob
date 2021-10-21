import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalOnOff } from '../../modules/modal';

const Modal = (props) => {



  // 리덕스 스토어 상태 확인
  const {onOff, foodName} = useSelector(state => ({
    onOff: state.modal.onOff,
    foodName: state.modal.foodName}));
  

  const dispatch = useDispatch();
  const onModalOnOff = () => dispatch(modalOnOff());



  return (
  <ModalStyle onClick={() => onModalOnOff()}>
    <div className="modalWrapper" >  
      <h3>{foodName} 검색 결과</h3>
      <iframe src={props.url} className="modalInner">
        props.title
      </iframe>
    </div>
  </ModalStyle>
  )
}

const ModalStyle = styled.div`

  display: ${props => props.display || "block"};
  position: fixed; 
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.79);
  cursor: pointer;
  z-index: 9999;

.modalWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
  outline: none;
}

h3 {
  margin: 20px 0;
  font-size: 2rem;

  color: white;
}

.modalInner{
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 35vw;
  height: 45vw;
  top: 0
}
`



export default Modal;