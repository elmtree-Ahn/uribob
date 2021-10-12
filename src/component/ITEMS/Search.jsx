import styled from 'styled-components'

const Search = () => {
  return(
    <SearchStyle>
      <input type="text" placeholder="무엇을 찾으시오?"/>
      <i class="fas fa-search"></i>
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