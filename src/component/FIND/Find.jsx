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
        const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=10&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;

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


  return(
    <FindStyle>
      <TitleBox title="이렇게나 많소"/>
      <div className="inner">
        <div className="categoryMenu">
          <ul>
            <li>구이</li>
            <li>국</li>
            <li>회</li>
            <li>양념</li>
            <li>밥</li>
            <li>젓갈</li>
            <li>찜</li>
            <li>전골</li>
            <li>김치</li>
            <li>나물</li>
            <li>장</li>
            <li>장아찌</li>
            <li>떡</li>
            <li>면</li>
            <li>한과</li>
            <li>죽</li>
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
  width: 20%;
  height: 500px;
  margin-right: 20px;
  background-color: royalblue;
}

.itemWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  background-color: orange;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  padding: 0;

}
`

export default Find;
