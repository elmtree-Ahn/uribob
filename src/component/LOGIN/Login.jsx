import styled from "styled-components"
import KakaoLoginBtn from "./KakaoLoginBtn";

const Login = () =>{
  return(
    <LoginStyle>
      <KakaoLoginBtn />
    </LoginStyle>
  )
}

export default Login;

const LoginStyle = styled.div`
padding-top: 70px;
`