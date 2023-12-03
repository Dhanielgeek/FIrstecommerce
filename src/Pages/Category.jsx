import React,{useState,useEffect,useContext} from 'react'
import './page.css'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/Context';

const Category = () => {

  const [categories, setcategories] = useState([])
  const [Showcat, setShowcat] = useState(false)
  const [Products, setProducts] = useState([])

  
  const {Mode} = useContext(Context)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((json)=> setProducts(json))
  },[])


  const Fetchcat = (e)=>{
    fetch(`https://fakestoreapi.com/products/category/${e}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
            setShowcat(true)
    console.log(e)
  }


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=> setcategories(json))
  },[])







  return (
    <div className={Mode == false ? "category" : "categorydark"}>
{
  Showcat === false ? categories.map((e)=>(
    <div className='categorycard' key={e} onClick={()=> setShowcat(Fetchcat(e))}>
      <p>
        {e}
      </p>
    </div>
  )) :   Products.map((products)=>(
    <div className='productcard' key={products.id}>
      <div className="imagehold">
        <img src={products.image} alt="" />
      </div>
     <div className="text">
        <h4>
          <NavLink style={{color:'black'}} to={`/details/${products.id}`}>
          {products.title}
          </NavLink>
        </h4>
        <p>{products.category}</p>
        <span>
            ₦ {products.price}
        </span>
     </div>
    </div>
  
))

}
   
    </div>
  )
}

export default Category



// <div className="categorycard" key={items.id}>
// <NavLink className={({isActive})=> 
// isActive ? "active" : "inactive"} style={{color:'black'}}>
  
// </NavLink>
// </div>


