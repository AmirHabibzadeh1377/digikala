import './categories.scss'
import { useEffect, useState } from 'react'
import Loading from "../loading/Loading"
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading , setLoading] = useState(false);
  const getCategories = async () => {
    const categoriesData = await fetch("http://80.75.14.90:9090/SevenIcons");
    const jsonData = await categoriesData.json();
    return jsonData;
  }
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response)
      setLoading(true);
    })
  }, [])
  return (
    <div className='categories'>
      <ul className='categoriesNav'>
        {categories.map(item => {
          return (
            <li className="categoryItem">
              <a href="">
                <img src={item.iconName} alt="" />
                <p>{item.label}</p>
              </a>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default Categories
