import './siteStories.scss'
import img1 from '../../images/download.jpg';
import img2 from '../../images/images.jpg';
import img3 from '../../images/miketyson_nft_boxer_binance_large_1649142739537.jpg';
import img4 from '../../images/pexels-oliver-sjöström-1433052.jpg';
const SiteStories = () => {
  return (
    <div className='siteStories'>
      <ul className="siteStoriesNav">
        <li className='siteStorieItem'><img src={img1} alt="" /></li>
        <li className='siteStorieItem'><img src={img2} alt="" /></li>
        <li className='siteStorieItem'><img src={img3} alt="" /></li>
        <li className='siteStorieItem'><img src={img4} alt="" /></li>
        <li className='siteStorieItem'><img src={img1} alt="" /></li>
        <li className='siteStorieItem'><img src={img2} alt="" /></li>
        <li className='siteStorieItem'><img src={img3} alt="" /></li>
        <li className='siteStorieItem'><img src={img4} alt="" /></li>
      </ul>
    </div>
  )
}

export default SiteStories
