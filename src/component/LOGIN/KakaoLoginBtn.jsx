import styled from "styled-components";

const KakaoLoginBtn = () => {

  // 리덕스 스토어 조회
  

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
            console.log(kakao_account.email);
            console.log(kakao_account.gender);
            console.log(kakao_account.profile.nickname);
            console.log(kakao_account.profile.profile_image_url)
          }
        });
      }
    })
  }


  // 로그인 정보 리덕스에 담기 

  return (
    <KakaoLoginBtnStyled onClick={() => {kakaoLogin()}}>
      <img src="https://asp.pointpark.com/PlusPointMember/resources/images/mobileHomePage/btn_kakao.png" alt="" />
    </KakaoLoginBtnStyled>
  )
}

export default KakaoLoginBtn;

const KakaoLoginBtnStyled = styled.div`
cursor: pointer;

img {
  height: 60px;
  width: auto;
}
`