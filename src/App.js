import './App.css';
import {styled, createGlobalStyle} from 'styled-components';
import Test from './component/Test';
import Header from './component/BASICCOMPONENT/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header />
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
  }
`;


export default App;
