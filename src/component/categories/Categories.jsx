import './categories.scss'
import img from '../../images/download1.jpg'
import { useEffect, useState } from 'react'
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const jsonData = await response.json();
    return jsonData;
  }
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response)
    })
  }, [])
  return (
    <div className='categories'>
      <ul className='categoriesNav'>
        {categories.map((item) => {
         return <li className="categoryItem">
            <a href="">
              <img src={item.image} />
              <p>{item.name}</p>
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Categories
