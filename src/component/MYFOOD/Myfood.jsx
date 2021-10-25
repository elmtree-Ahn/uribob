import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components"
import { Link } from "react-router-dom";
import TitleBox from "../ITEMS/TitleBox";

const Myfood = () => {

  // login store 조회
  const { email } = useSelector(state => ({
    email: state.login.email,
  }))

  let history = useHistory();

  return (
    <MyfoodStyle>
      { 
        email.length > 1
        ? <div>여기가 내 밥상이다!!</div>
        : (
          <Link to="/login">
            <TitleBox title="들어와야 볼 수 있오!"></TitleBox>
            <button>들어가기</button>
          </Link>
          
          )
      }
      
    </MyfoodStyle>
  )
}

export default Myfood;

const MyfoodStyle = styled.div`
padding-top: 80px;
font-size: 2rem;
font-weight: 700;
text-align: center;

button {
  width: 150px;
  height: 40px;
  
  background-color: #333;
  border-radius: 30px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
}

`