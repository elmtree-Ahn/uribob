import styled from 'styled-components';

const title = "불고기";

const url = (e) => {
return `https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${e}`
};

const ItemCard = (props) => {
  return(
    <ItemCardStyle>
      <div className="title">{props.title}</div>

        <a href={url(title)} className="goUrl">이게 무엇이오?</a>
        <div className="btnBox">
          <button className="btn1 btn">{props.btn1}</button>
          <button className="btn2 btn">{props.btn2}</button>
          <button className="btn3 btn">{props.btn3}</button>
        </div>
        

        <div className="cart">내 밥상에 넣겠소.</div>  

      
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
background-color: white;
box-shadow: 0px 2px 10px #999;
transition: .5s;

&:hover{
  transform: translate(0, -5px);
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
  &:hover{
    color: #5C6E91;
  }
}

.btn {
  margin: 0 5px;
  padding: 5px 15px;
  font-size: 0.8rem;
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