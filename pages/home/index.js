import './home.scss'
import Header from '../../src/component/header/Header';
import SiteStories from '../../src/component/siteStories/SiteStories'
import TopSwiper from '../../src/component/swiper/TopSwiper';
import Categories from '../../src/component/categories/Categories';
import IncridebleOffer from '../../src/component/incrideble/IncridebleOffer';
const home = () => {
  return (
    <div className='container'>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="storiesContainer">
        <SiteStories/>
      </div>
      <div className="swiperContainer">
        <TopSwiper/>
      </div>
      <div className="contentContainer">
        <Categories/>
        <IncridebleOffer/>
      </div>
    </div>
  )
}

export default home
