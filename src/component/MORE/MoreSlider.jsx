import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from '../ITEMS/ItemCard';
import "./moreSliderStyle.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';


SwiperCore.use([Pagination,Navigation]);



const MoreSlider = (props) => {

  

  return (
    <MoreSliderStyle>
      {/* <h1>{props.data[0]["대표식품명"]}</h1> */}
      <div className="moreSlider">
        <Swiper 
        slidesPerView={5} 
        spaceBetween={20}         slidesPerGroup={2} l
        oop={true} loopFillGroupWithBlank={true} pagination={{"clickable": true}} 
        navigation={{'clickable':true}} 
        className="mySwiper">
          {
            props.data && props.data.map((a, i) => {
              return (
              <SwiperSlide>
                <ItemCard title={props.data[i]["대표식품명"]} btn1={props.data[i]["식품분류(중)"]} btn2={props.data[i]["식품분류(소)"]} btn3={props.data[i]["식품유형"]}/>
              </SwiperSlide> 
              )
            })
          }

      </Swiper>
      </div>
      
    </MoreSliderStyle>
  )
}

const MoreSliderStyle = styled.div`
.moreSlider {
  width: 90vw;
  margin: 0 auto;
}
`

export default MoreSlider;