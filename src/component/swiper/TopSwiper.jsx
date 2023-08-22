import './swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
const TopSwiper = () => {
  return (
    <div className='topSwiper'>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='swiper'
      >
        <SwiperSlide className='swiperSlideTop'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiperSlideTop'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiperSlideTop'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiperSlideTop'>Slide 4</SwiperSlide>
        <div className="buttons">
          <SlideNextButton />
          <SlidePrevButton />
        </div>
      </Swiper>
    </div>
  )
}

export default TopSwiper