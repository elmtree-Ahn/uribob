import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../ITEMS/Search';

const HeaderBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 ;
  background-color: white;
  z-index: 998;

`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
`

const MenuWrap = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

const Menu = styled.div`
  margin-right: 2vw;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -.2px;
`

const Header = () => {
  return(
    <>
      <HeaderBox>
        <Link to="/">
          <Logo>우리밥</Logo>
        </Link>
        <MenuWrap>
          <Link to="/more">
            <Menu>둘러보기</Menu>
          </Link>
          <Menu>찾아보기</Menu>
          <Search />
        </MenuWrap>
        <MenuWrap>
          <Menu>들어가기</Menu>
          <Menu>입회하기</Menu>
          {/* <Menu>내 밥상</Menu> */}
        </MenuWrap>
      </HeaderBox>

    </>
  )
}



export default Header;