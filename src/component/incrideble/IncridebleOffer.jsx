import './incridebleoffer.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img4 from '../../images/pexels-oliver-sjöström-1433052.jpg';
import boxImage from '../../images/box.png';
import IncredibleCartItem from './IncredibleCartItem';
const IncridebleOffer = () => {
    return (
        <div>
            <Swiper
                spaceBetween={100}
                slidesPerView={8}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper'
            >
                <SwiperSlide className='swiperSlide'>
                    <a className="specialOfferBox">
                        <span className='specialOfferText'>
                            پیشنهادات شگفت انگیز
                        </span>
                        <div className='image'>
                            <img src={boxImage} className='specialOfferImageBox' alt="" />
                        </div>
                        <span className='specialShowAllLink'>مشاهده همه</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                    <IncredibleCartItem img={img4} oldprice={160000} price={145000} />
                </SwiperSlide>
                <SwiperSlide className='swiperSlide'>
                   <div className='showAllOffers'>
                        نمایش همه
                   </div>
                </SwiperSlide>
                <div className="buttons">
                    {/* <SlideNextButton />
          <SlidePrevButton /> */}
                </div>
            </Swiper>
        </div>
    )
}

export default IncridebleOffer
