import { useState } from 'react';

import styled from 'styled-components';
import Modal from './Modal';
import { useEffect,} from 'react';
import { useRef } from 'react';


const ItemCard = (props) => {

  const [modalOpen, setModalOpen] = useState("none");

  const url = (e) => {
    return `https://search.daum.net/search?w=img&nil_search=btn&DA=NTB&enc=utf8&q=${e}`
  };

  

  return(
    <ItemCardStyle>    
      <div className="title">
        {props.title}
      </div>
      <div className="goUrl" onClick={()=>{setModalOpen("block")}}>이게 무엇이오?</div>
      <div className="btnBox">
        <button className="btn1 btn">{props.btn1}</button>
        <button className="btn2 btn">{props.btn2}</button>
        <button className="btn3 btn">{props.btn3}</button>
      </div>
      <div className="cart">
        내 밥상에 넣겠소.
      </div>

    <Modal url={url(props.title)} display={modalOpen}/>


    </ItemCardStyle>
  )
}




const ItemCardStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 20vw;
min-width: 220px;
height: 26vw;
min-height: 287px;
margin-bottom: 20px;
background-color: white;
box-shadow: 0px 2px 10px #999;
transition: .5s;

&:hover{
  /* transform: translate(0, -5px); */
  box-shadow: 0px 2px 10px #444;
}

.title {
  padding: 3vw 0;

  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.goUrl {
  margin-bottom: 1vw;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover{
    color: #5C6E91;
  }
}

.btn {
  margin: 0 5px;
  padding: 5px 15px;
  font-size: 0.9rem;
  color: white;
  border: none;
  border-radius: 10px;
}

.btn1 {
  background-color: #5C6E91;
}

.btn2 {
  background-color: #DD9866
}

.btn3 {
  background-color: #59886B;
}

.cart {
  margin-bottom: 2vw;
}
`

export default ItemCard;