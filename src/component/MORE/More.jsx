import styled from 'styled-components'
import TitleBox from '../ITEMS/TitleBox';
import MoreSlider from './MoreSlider';
import axios from 'axios';
import { useEffect, useState } from 'react';

const More = () => {

  const [data, setData] = useState(null);


  useEffect(async() => {
    try {
      const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=10&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;

      const res = await axios({
        method: 'get',
        url: url,
      })
      setData(res.data.data)
      console.log(res.data.data[0]["대표식품명"])
    }

    catch (error) {
      console.log(error)
    }

  }, [])
  return(
    <MoreStyle>

      <TitleBox title="이런 음식은 어떻소?"/>
      <MoreSlider data={data}/>
    </MoreStyle>
  )
}

const MoreStyle = styled.div`
padding-top: 70px;
`

export default More;