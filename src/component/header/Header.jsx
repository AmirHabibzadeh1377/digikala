import React from 'react'
import "./header.scss"
const Header = () => {
  return (
    <div className='header'>
      <div className="top">
        <div className="left">
            <span className='logo'><h1>digikala</h1></span>
            <span className="search">
                <input type="text" placeholder='جستجو...' />    
            </span>            
        </div>
        <div className="right">
          <span> salam</span>
          <span>khodahafez</span> 
       </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Header
