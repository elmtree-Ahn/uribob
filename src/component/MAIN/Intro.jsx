import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Intro = () => {
  return(
    <IntroStyle>
      <div className="textBox">
        <div className="title">
          우리밥 <br/>
          어디까지 알고 계시오?  
        </div>
        <div className="description">
          새로운 음식을 먹어보고 싶다면 멀리서 찾지 마시오. 우리가 모르는 우리 음식들이 생각 이상으로 많소.
        </div>
        <button>알아보기</button>
      </div>
      <div className="imgBox">
        {/* <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      </div>
    </IntroStyle>
  )
}

const IntroStyle = styled.div`
padding-top:70px;
`

export default Intro;