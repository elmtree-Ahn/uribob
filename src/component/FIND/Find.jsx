import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../ITEMS/ItemCard';
import TitleBox from '../ITEMS/TitleBox';
import { useSelector } from 'react-redux';
import Modal from '../ITEMS/Modal';

const Find = (props) => {

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    
    const moreTime = setTimeout(async() => {
      try {
        const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=100&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;

        const res = await axios({
          method: 'get',
          url: url,
        })
        setFoodData(res.data.data)
      }
      catch (error) {
        console.log(error)
      }

    }, 0)

    return() => {
      clearTimeout(moreTime)
    }

  }, [])
  

  // 바뀐 음식 이름
  const [kindOfFood, setKindOfFood] = useState('');
  
  
  const findFoodArr = [];
  const findFoodData = (food) => {
    for (let i = 0; i < foodData.length; i++) {
      if (foodData[i]['식품분류(중)'] === food) {
        findFoodArr.push(foodData[i])
      }
    }
  }

  findFoodData(kindOfFood)

  // 리덕스 스토어 상태 확인
  const {onOff, foodName} = useSelector(state => ({
    onOff: state.modal.onOff,
    foodName: state.modal.foodName}));


  // url 주소
  const url = (e) => {
    return `https://search.daum.net/search?w=img&nil_search=btn&DA=NTB&enc=utf8&q=${e}`
  };

  return(
    <FindStyle>
      <TitleBox title={kindOfFood.length > 0 ? kindOfFood.slice(0, -1) + `, 이렇게나 많소` : `무슨 음식을 찾소?`
        }/>
      <div className="inner">
        <div className="categoryMenu">
          <ul>
            <li onClick={() => {findFoodData(setKindOfFood('구이류'))}}>구이</li>
            <li onClick={() => {setKindOfFood('국류')}}>국</li>
            <li onClick={() => {setKindOfFood('회류')}}>회</li>
            <li onClick={() => {setKindOfFood('양념류')}}>양념</li>
            <li onClick={() => {setKindOfFood('밥류')}}>밥</li>
            <li onClick={() => {setKindOfFood('젓갈류')}}>젓갈</li>
            <li onClick={() => {setKindOfFood('찜류')}}>찜</li>
            <li onClick={() => {setKindOfFood('전골류')}}>전골</li>
            <li onClick={() => {setKindOfFood('김치류')}}>김치</li>
            <li onClick={() => {setKindOfFood('나물류')}}>나물</li>
            <li onClick={() => {setKindOfFood('장류')}}>장</li>
            <li onClick={() => {setKindOfFood('장아찌류')}}>장아찌</li>
            <li onClick={() => {setKindOfFood('떡류')}}>떡</li>
            <li onClick={() => {setKindOfFood('면류')}}>면</li>
            <li onClick={() => {setKindOfFood('한과류')}}>한과</li>
            <li onClick={() => {setKindOfFood('죽류')}}>죽</li>
          </ul>
        </div>
        <div className="itemWrap">
          {
            findFoodArr.length > 0
            ? (findFoodArr.map((a, i) => {
              return (
                <ItemCard title={a["대표식품명"]} btn1={a["식품분류(중)"]} btn2={a["식품분류(소)"]} btn3={a["식품유형"]} key={i}/>
              )
            }))
            : (foodData.map((a, i) => {
              return (
                <ItemCard title={a["대표식품명"]} btn1={a["식품분류(중)"]} btn2={a["식품분류(소)"]} btn3={a["식품유형"]} key={i}/>
              )
            }))
          }
        </div>
      </div>
      {
        onOff === true
        ? <Modal url={url(foodName)} />
        : null
      }
    </FindStyle>
  )
}


const FindStyle = styled.div`

padding-top: 70px;

.inner {
  display: flex;
  justify-content: space-around;  
  width: 100vw;
  margin: 0 auto;
}

.categoryMenu {
  position: sticky;
  top: 10%;
  width: 15%;
  height: 500px;
  padding: 20px;
  margin-right: 20px;
  /* background-color: royalblue; */
  box-sizing: border-box;
    border: 3px solid #999;
  border-radius: 3px;
  background-color: white;
}

.itemWrap {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  width: 70%;
  /* background-color: orange; */
}

ul {
padding: 0;

}

li {
  list-style: none;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 5px;
  cursor: pointer;

}
`

export default Find;
