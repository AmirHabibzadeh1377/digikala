import './slidePrevButton.scss'
import { useSwiper } from 'swiper/react';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
const SlidePrevButton = () => {
    const swiper = useSwiper();

  return (
    <button className='prevButton' onClick={() => swiper.slidePrev()}><NavigateBeforeOutlinedIcon/></button>
  )
}

export default SlidePrevButton
