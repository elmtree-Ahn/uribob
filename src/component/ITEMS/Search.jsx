import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Search = () => {

  const [findData, setFindData] = useState('');
  

  return(
    <SearchStyle>
      <input onChange={(e) => {setFindData(e.target.value)}} type="text" placeholder="무엇을 찾으시오?"/>
      <Link to="/find" findData={findData} >
        <i class="fas fa-search"></i>
      </Link>
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
position: relative;
input {
  width: 14vw;
  height: 25px;
  padding: 0 10px;
  background-color: #eee;
  border: 1px solid #eee;
  outline: none;
  border-radius: 10px;
}
i {
  position: absolute;
  top: 5px;
  right: 10px;
}
`

export default Search;