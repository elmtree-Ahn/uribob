import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./introstyles.css";


const Intro = () => {
  return(
    <IntroStyle>
      <div className="intro">
        <div className="textBox">
          <div className="title">
            <div className="title_1">우리밥,</div>
            어디까지 알고 계시오?  
          </div>
          <div className="description">
            새로운 음식을 먹어보고 싶다면 멀리서 찾지 마시오. <br/> 우리가 모르는 우리 음식들이 생각이상으로 많소.
          </div>
          <button>알아보기</button>
        </div>
        <div className="imgBox">
          <Swiper navigation={true} className="mySwiper" slidesPerView={1}  spaceBetween={50} loop={true} autoplay={true} pagination={false}>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>

          </Swiper>
        </div>
      </div>
      <div className="footer">
        원산지 : 루피가 떠오르는 캠프에서 만들었오.
      </div>

    </IntroStyle>
  )
}

const IntroStyle = styled.div`
padding-top:70px;

.intro {
  display: flex;
  padding: 1vw 5vw;
}
.textBox {
  width: 50vw;
  padding-left: 2vw;
}

.title {
  padding-top: 10vw;
padding-bottom: 2vw;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -5px;
  
}

.title_1 {
  font-size: 5rem;
  color: #64A36F;
}

.description {
  width: 45vw;
  font-size: 1.5rem;
  font-weight: 600;
}

button {
  display: block;
  width: 160px;
  height: 40px;
  margin-top: 30px;
  background-color: #333;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  transition: .2s;
}

button:hover {
  background-color: #555;
}

.footer {
  padding-top: 1vw;
  padding-bottom: 4vw;
  text-align: center;
}

`

export default Intro;