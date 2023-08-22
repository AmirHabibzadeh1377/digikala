import './home.scss'
import Header from '../../component/header/Header';
import SiteStories from '../../component/siteStories/SiteStories'
import TopSwiper from '../../component/swiper/TopSwiper';
import Categories from '../../component/categories/Categories';
import IncridebleOffer from '../../component/incrideble/IncridebleOffer';
const home = () => {
  if(document.readyState == "complete"){
    console.log("complete")
  }

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
