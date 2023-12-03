import React,{useState,useEffect,useContext} from 'react'
import './Style.css'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context/Context'
import { CartContext } from '../Context/CartContext';

const Proucts = () => {

  const {Mode} = useContext(Context)

    const [Products, setProducts] = useState([])

    const {dispatch,state } = useContext(CartContext)
    console.log(state)

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
},[])



  return (
    <div className={Mode == false ? "main" : "maindark"} >
       {
        Products.map((products)=>(
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
                <button onClick={()=> dispatch({type:"Add to cart",payload:products})} className='butAdd'>Add to Cart</button> 
             </div>
            </div>
          
        ))
       }
    </div>
  )
}

export default Proucts