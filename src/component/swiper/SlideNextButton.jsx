import './slideNextButton.scss'
import { useSwiper } from 'swiper/react';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <button className='nextButton' onClick={() => swiper.slideNext()}><NavigateNextOutlinedIcon/></button>
    )
}

export default SlideNextButton
