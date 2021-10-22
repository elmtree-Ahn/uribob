import { useSelector } from "react-redux";
import styled from "styled-components"
import TitleBox from "../ITEMS/TitleBox";
import KakaoLoginBtn from "./KakaoLoginBtn";
import foodImg from "../../food.svg";


const Login = () =>{

  // login store 조회
  const { email, nickname, thumnail_url, gender } = useSelector(state => ({
    email: state.login.email,
    nickname: state.login.nickname,
    thumnail_url: state.login.thumnail_url,
    gender: state.login.gender,

  }));



  return(
    <LoginStyle>
      { email.length > 1 
        ? (
          <SuccessLoginStyle>
            <TitleBox title="어서오시오!"/> 
            <div className="hello">{nickname} 대감, 어떤 음식을 찾으시오?</div>
            <img src={foodImg} alt="음식이미지" />

          </SuccessLoginStyle>
        )
        : (
          <>
            <TitleBox title="들어가기"/>
            <div className="center">
              <KakaoLoginBtn />
            </div>
          </>
        )
      }

    </LoginStyle>
  )
}

export default Login;

const SuccessLoginStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.hello{
  font-size: 1.2rem;
}

img {
  margin-top: 20px;
  width: 300px;
  height: auto;
}

`

const LoginStyle = styled.div`
padding-top: 70px;
.center {
  display: flex;
  justify-content: center;

}
`