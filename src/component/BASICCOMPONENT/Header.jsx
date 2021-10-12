import styled from 'styled-components';

const HeaderBox = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70px;
  padding: 0 5vw;
  background-color: white;

`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  
`

const Header = () => {
  return(
    <>
      <HeaderBox>
        <Logo>우리밥</Logo>
      </HeaderBox>
    </>
  )
}



export default Header;