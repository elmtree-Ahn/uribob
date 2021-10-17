import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useRef } from 'react';

const Modal = (props) => {

  const copyDisplay = props.display;
  const [close, setClose] = useState(copyDisplay)

  return (
    <>
      <ModalStyle display={close}>
        {/* <div className="modalWrapper" onClick={()=> {setClose("none")}}> */}
        <div className="modalWrapper">  
          <iframe src={props.url} className="modalInner">
            props.title
          </iframe>
        </div>
      </ModalStyle>
    </>
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
  z-index: 9999;

.modalWrapper {
  display: flex;
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

.modalInner{
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 40vw;
  height: 50vw;
  top: 0
}
`

export default Modal;