import React from 'react'
import "./header.scss";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
      <div className="bottom"></div>
    </div>
  )
}

export default Header
