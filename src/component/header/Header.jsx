import React from 'react'
import "./header.scss";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
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
          <div>
             {<Person2OutlinedIcon className ='icon'/>}
             {<ArrowDropDownOutlinedIcon className='arrowIcon'/>}
          </div>
          <span className='horizontal'></span>
          <div>
            {<ShoppingCartOutlinedIcon className='icon'/>}  
            <span className='counter'>
              1
            </span>
          </div> 
       </div>
      </div>
      <div className="bottom">
        <div className='right'>
          <div className='navCategories'>
            <ul className='caltegoryItems'>
              <li className="categoryItem"> <a href="">item1</a> </li>
              <li className="categoryItem"> <a href="">item2</a> </li>
              <li className="categoryItem"> <a href="">item3</a> </li>
              <li className="categoryItem"> <a href="">item4</a> </li>
              <li className="categoryItem"> <a href="">item5</a> </li>
              <li className="categoryItem"> <a href="">item6</a> </li>
              <li className="categoryItem"> <a href="">item7</a> </li>
              <li className="categoryItem"> <a href="">item8</a> </li>
            </ul>
          </div>
        </div>
        <div className="left">
          
        </div>
      </div>
    </div>
  )
}

export default Header
