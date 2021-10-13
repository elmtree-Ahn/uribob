import './App.css';
import {styled, createGlobalStyle} from 'styled-components';
import Test from './component/Test';
import Header from './component/MAIN/Header';
import { Route } from 'react-router';
import Intro from './component/MAIN/Intro';
import ItemCard from './component/ITEMS/ItemCard';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <Header /> */}
      {/* 인트로 페이지 */}
      {/* <Route exact path="/">
        <Intro/>
      </Route> */}

      <ItemCard />
      {/* <Test /> */}
    </div>
  );
}


// 전역속성
const GlobalStyle = createGlobalStyle`
  body {
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
