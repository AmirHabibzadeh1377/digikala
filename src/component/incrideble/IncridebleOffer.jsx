import './incridebleoffer.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import boxImage from '../../images/box.png';
import IncredibleCartItem from './IncredibleCartItem';
import ShowAllOffers from './ShowAllOffers';
import { useState, useEffect } from 'react';
import Loading from '../loading/Loading';

const IncridebleOffer = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    const getData = async () => {
        var response = await fetch("https://api.escuelajs.co/api/v1/products");
        var responseJson = await response.json();
        return responseJson;
    }
    
    useEffect(() => {
        getData().then((res) => {
            if (document.readyState == 'complete') {
                setProducts(res.filter(item => item.images[1] != null).slice(0, 20))
                setLoad(true)
            }
        })
    }, [])
    return (
        <div>
            {!load ?
                <Loading/>
                :
                <Swiper
                    slidesPerView={6}
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
                                <img src={boxImage} className='specialOfferImageBox'/>
                            </div>
                            <span className='specialShowAllLink'>مشاهده همه</span>
                        </a>
                    </SwiperSlide>
                    {products.map((item) => {

                        return <SwiperSlide className='swiperSlide'>
                            <IncredibleCartItem img={item.images[0]} oldprice={item.price} price={item.price} />
                        </SwiperSlide>
                    })}
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
            }
        </div>
    )
}

export default IncridebleOffer