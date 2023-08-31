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
        var response = await fetch("http://80.75.14.90:9090/products/incredibleOffers");
        var responseJson = await response.json();
        return responseJson;
    }

    useEffect(() => {
        getData().then((res) => {
            if (document.readyState == 'complete') {
<<<<<<< HEAD
                setProducts(res)
                setLoad(true)
=======
                setProducts(res.filter(item => item.images[1] != null).slice(0, 20))
                setTimeout(() => {
                    setLoad(true)
                }, 1000)
>>>>>>> 52c1cebc (changes)
            }
        })
    }, [])
    return (
        <div>
            {!load ?
                <Loading />
                :
                <Swiper
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
                                <img src={boxImage} className='specialOfferImageBox' />
                            </div>
                            <span className='specialShowAllLink'>مشاهده همه</span>
                        </a>
                    </SwiperSlide>
                    {products.map((item) => {

                        return <SwiperSlide className='swiperSlide'>
                            <IncredibleCartItem img={item.indexImageUrl} oldprice={item.price} price={item.priceWithDiscount} />
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