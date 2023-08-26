import './swiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading'

const TopSwiper = () => {
  const [sliders , setSliders] = useState([]);
  const [loading , setLoading] = useState(false);
  const fetchSliderApi = async ()=>{
    const response = await fetch("http://80.75.14.90:9090/public/mainSlider");
    const responseJson = await response.json();
    return responseJson;
  }

  useEffect(()=>{
      fetchSliderApi().then((response)=>{
       setSliders(response);
       setLoading(true)
      })
  },[])
  return (
    <div className='topSwiper'>
     {
      !loading?

      <Loading/>
      :
      <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='swiper'
    >
     {sliders.map(slider=>{
     return <SwiperSlide key={slider.id} className='swiperSlideTop'>
        <img key={slider.id} src={slider.original} alt="" className='swipperImage' /></SwiperSlide>
     })}
      <div className="buttons">
        <SlideNextButton />
        <SlidePrevButton />
      </div>
    </Swiper>
     }
    </div>
  )
}

export default TopSwiper