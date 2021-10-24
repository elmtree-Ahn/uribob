import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../ITEMS/Search';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setEmpty } from '../../modules/login';

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
  cursor: pointer;
  margin-right: 2vw;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -.2px;
`

const Header = () => {
    // login store 조회
    const { email, nickname, thumnail_url, gender } = useSelector(state => ({
      email: state.login.email,
      nickname: state.login.nickname,
      thumnail_url: state.login.thumnail_url,
      gender: state.login.gender,
    }));

    // 디스패치
    const dispatch = useDispatch();

    // 액션들을 디스패치 하는 함수 만들기 
    const onSetEmpty = () => dispatch(setEmpty());

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
          <Link to="/find">
            <Menu>찾아보기</Menu>
          </Link>
          <Search />
        </MenuWrap>
        { email.length > 0 
          ? (
            <MenuWrap>
              <Link to='/myfood'>
                <Menu>내 밥상</Menu>
              </Link>
              <Link to='/mypage'>
                <Menu>호패보기</Menu>
              </Link>
              <Link to="/">
                <Menu onClick={onSetEmpty}>나가기</Menu>
              </Link>
            </MenuWrap>
          )
          : (
            <MenuWrap>
              <Link to='/myfood'>
                <Menu>내 밥상</Menu>
              </Link>
              <Link to='/login'>
                <Menu>들어가기</Menu>
              </Link>
              <Menu>입회하기</Menu>
            </MenuWrap>
          )

        }
      </HeaderBox>
    </>
  )
}



export default Header;