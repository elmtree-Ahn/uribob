import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../ITEMS/ItemCard';
import TitleBox from '../ITEMS/TitleBox';

const Find = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    
    const moreTime = setTimeout(async() => {
      try {
        const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=150&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;

        const res = await axios({
          method: 'get',
          url: url,
        })
        setData(res.data.data)
      }
      catch (error) {
        console.log(error)
      }

    }, 100)

    return() => {
      clearTimeout(moreTime)
    }
  }, [])
  
  const [kindOfFood, setKindOfFood] = useState('');


  

  return(
    <FindStyle>
      <TitleBox title={`${kindOfFood}이렇게나 많소`}/>
      <div className="inner">
        <div className="categoryMenu">
          <ul>
            <li onClick={() => {setKindOfFood('구이, ')}}>구이</li>
            <li onClick={() => {setKindOfFood('국, ')}}>국</li>
            <li onClick={() => {setKindOfFood('회, ')}}>회</li>
            <li onClick={() => {setKindOfFood('양념, ')}}>양념</li>
            <li onClick={() => {setKindOfFood('밥, ')}}>밥</li>
            <li onClick={() => {setKindOfFood('젓갈, ')}}>젓갈</li>
            <li onClick={() => {setKindOfFood('찜, ')}}>찜</li>
            <li onClick={() => {setKindOfFood('전골, ')}}>전골</li>
            <li onClick={() => {setKindOfFood('김치, ')}}>김치</li>
            <li onClick={() => {setKindOfFood('나물, ')}}>나물</li>
            <li onClick={() => {setKindOfFood('장, ')}}>장</li>
            <li onClick={() => {setKindOfFood('장아찌, ')}}>장아찌</li>
            <li onClick={() => {setKindOfFood('떡, ')}}>떡</li>
            <li onClick={() => {setKindOfFood('면, ')}}>면</li>
            <li onClick={() => {setKindOfFood('한과, ')}}>한과</li>
            <li onClick={() => {setKindOfFood('죽, ')}}>죽</li>
          </ul>
        </div>
        <div className="itemWrap">
          {
            data && data.map((a) => {
              return (
                <ItemCard title={a["대표식품명"]} btn1={a["식품분류(중)"]} btn2={a["식품분류(소)"]} btn3={a["식품유형"]}/>
              )
            })
          }
        </div>
      </div>
    </FindStyle>
  )
}


const FindStyle = styled.div`

padding-top: 70px;

.inner {
  display: flex;
  justify-content: space-around;  
  width: 90vw;
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
  justify-content: space-around;
  width: 85%;
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
