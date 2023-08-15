import './incredibleCartItem.scss'

const IncredibleCartItem = ({img, discount , price , oldprice}) => {
  return (
    <div className='incredibleSwipper'>
      <a href="">
        <img src={img} alt="" />
        <div className='priceContainer'>
          <div className="discount">{discount}%</div>
          <span className='price'>
            {price} <span className='prictUnit'>تومان</span>
          </span>
          <span className='oldPrice'>{oldprice}</span>
        </div>
      </a>
    </div>
  )
}

export default IncredibleCartItem
