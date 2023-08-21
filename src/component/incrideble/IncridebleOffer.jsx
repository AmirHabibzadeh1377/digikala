import './incridebleoffer.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img4 from '../../images/pexels-oliver-sjöström-1433052.jpg';
import boxImage from '../../images/box.png';
import IncredibleCartItem from './IncredibleCartItem';
import ShowAllOffers from './ShowAllOffers';
import { useEffect, useState } from 'react';
const IncridebleOffer = ({products}) => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
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
                {/* {products.map(item => {
                    return <SwiperSlide className='swiperSlide'>
                        <IncredibleCartItem img={item.images[1]} oldprice={item.price} price={item.price} />
                    </SwiperSlide>
                })} */
                console.log(products)}

                <SwiperSlide className='swiperSlide'>
                    <div className='showAllOffers'>
                        <ShowAllOffers />
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

export async function getStaticProps(){
        const getData = await fetch("https://api.escuelajs.co/api/v1/products");
        const jsonData = await getData.json();
        return {
              props: { products: jsonData},
        };
}