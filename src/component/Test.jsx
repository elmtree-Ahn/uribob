import axios from 'axios';
import { useEffect } from 'react';

const Test = () => {

  useEffect(async () => {
    try {
      const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=10&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;

      const res = await axios({
        method: 'get',
        url: url,
      })
      console.log(res.data);
    }
    
    catch (error) {
      console.log(error);
    }

  }, [])

  return(
    <>
      <h1>test 이리오너라</h1>
    </>
  )
}

export default Test;