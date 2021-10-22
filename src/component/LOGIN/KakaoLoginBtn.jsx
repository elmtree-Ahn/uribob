import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setEmail, setGender, setNickame, setThumnailUrl } from "../../modules/login";

const KakaoLoginBtn = () => {

  // 리덕스 스토어 조회
  const { email, nickname, thumnail_url, gender } = useSelector(state => ({
    email: state.login.email,
    nickname: state.login.nickname,
    thumnail_url: state.login.thumnail_url,
    gender: state.login.gender,

  }));

// 디스패치
const dispatch = useDispatch();
// 액션 디스패치 하는 함수
const onSetEmail = email => dispatch(setEmail(email));
const onSetNickname = nickname => dispatch(setNickame(nickname));
const onSetThumnailUrl = thumnail_url => dispatch(setThumnailUrl(thumnail_url));
const onSetGender = gender => dispatch(setGender(gender));

  // 카카오 앱키 입력
  // window.Kakao.init('49c9dd59cca9d60ad0f6b04cc69e1220');

  // 카카오 로그인
  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email, gender',
      success: function(authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            // 카카오 로그인 정보 변수화
            onSetEmail(kakao_account.email);
            onSetGender(kakao_account.gender);
            onSetNickname(kakao_account.profile.nickname);
            onSetThumnailUrl(kakao_account.profile.profile_image_url);
          }
        });
      }
    })
  } 

  return (
    <KakaoLoginBtnStyled onClick={() => {kakaoLogin()}}>
      <img src="https://asp.pointpark.com/PlusPointMember/resources/images/mobileHomePage/btn_kakao.png" alt="" />
    </KakaoLoginBtnStyled>
  )
}

export default KakaoLoginBtn;

const KakaoLoginBtnStyled = styled.div`
display: inline-block;
cursor: pointer;

img {
  height: 60px;
  width: auto;
}
`