import './App.css';
import {styled, createGlobalStyle} from 'styled-components';
import Test from './component/Test';
import Header from './component/MAIN(INTRO)/Header';
import { Route } from 'react-router';
import Intro from './component/MAIN(INTRO)/Intro';
import ItemCard from './component/ITEMS/ItemCard';
import More from './component/MORE/More';
import Find from './component/FIND/Find';
import Login from './component/LOGIN/Login';
import Myfood from './component/MYFOOD/Myfood';
import Mypage from './component/MYPAGE/Mypage';




function App(props) {



  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
      {/* 인트로 페이지 */}
      <Route exact path="/" component={Intro} />
      {/* 둘러보기 */}
      <Route path="/more" component={More} />
      <Route path="/myfood" component={Myfood} />
      {/* 찾아보기 */}
      <Route path="/find" component={Find} />
      {/* 입회하기 */}
      <Route path="/login" component={Login} />
      {/* 호패보기 */}
      <Route path="/mypage" component={Mypage} />
      
    </div>
  );
}


// 전역속성
const GlobalStyle = createGlobalStyle`
  body {
    /* position: fixed; */
    /* top: 0; */
    /* overflow-y: scroll; */
    /* width: 100%; */
    box-sizing: border-box;
    background-color: #FFF3DE;

    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap');
    font-family: 'Noto Serif KR', serif;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export default App;
