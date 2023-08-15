import './home.scss'
import Header from '../../component/header/Header';
import SiteStories from '../../component/siteStories/SiteStories'
import TopSwiper from '../../component/swiper/TopSwiper';
import Categories from '../../component/categories/Categories';
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
      </div>
    </div>
  )
}

export default home
