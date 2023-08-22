import './categories.scss'
import img from '../../images/download1.jpg'
import { useEffect, useState } from 'react'
const Categories = () => {
<<<<<<< HEAD
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const jsonData = await response.json();
=======

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const categoriesData = fetch("https://api.escuelajs.co/api/v1/categories");
    const jsonData = (await categoriesData).json();
>>>>>>> f371f115 (added new options in the my degikala project)
    return jsonData;
  }
  useEffect(() => {
    getCategories().then((response) => {
<<<<<<< HEAD
      setCategories(response)
=======
      console.log(response)
      setCategories(response);
>>>>>>> f371f115 (added new options in the my degikala project)
    })
  }, [])
  return (
    <div className='categories'>
      <ul className='categoriesNav'>
<<<<<<< HEAD
        {categories.map((item) => {
         return <li className="categoryItem">
            <a href="">
              <img src={item.image} />
              <p>{item.name}</p>
            </a>
          </li>
=======
        {categories.map(item => {
          return (
            <li className="categoryItem">
              <a href="">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </a>
            </li>)
>>>>>>> f371f115 (added new options in the my degikala project)
        })}
      </ul>
    </div>
  )
}

export default Categories
