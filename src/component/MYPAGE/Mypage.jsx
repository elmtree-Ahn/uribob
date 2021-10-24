import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"

const Mypage = () => {

  // 스토어 조회하기
  const { email, nickname, thumnail_url, gender } = useSelector(state => ({
    email: state.login.email,
    nickname: state.login.nickname,
    thumnail_url: state.login.thumnail_url,
    gender: state.login.gender,
  }))



  return (
    <MypageStyle thumnail_url={thumnail_url}>
      <div className="circle"></div>
      <div className="profile"></div>
      <div className="mypageBox">
        <div className="mypageinner">
        <div className="title">{nickname}</div>
        <div className="email">{email}</div>
        </div>
        
      </div>
      <div className="bottom"></div>


    </MypageStyle>
  )
}

export default Mypage;

const MypageStyle = styled.div`

.circle {
  position: absolute;
  top: -200px;
  right: 50%;
  transform: translate(50% ,0);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-image: url("https://images.unsplash.com/photo-1517868674985-0525518ae392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.profile {
  width: 150px;
  height: 150px;
  background-color: white;
  background-image: url("${props => props.thumnail_url}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 320px;
  right: 50%;
  transform: translate(50% ,0);
  border-radius: 50%;
}

.mypageBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding-top: 500px;
}

.mypageinner {
display: flex;
flex-direction: column;
align-items: center;
}

.title{
  font-size: 1.4rem;
  font-weight: 600;
}

.email {
margin-top: 4px;
}

.bottom{
  width: 600px;
  height: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: #333;
  border-radius: 20px 20px  0  0;
}
`