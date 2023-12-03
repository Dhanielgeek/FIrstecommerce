import React, { useState, useEffect,useContext } from 'react'
import './page.css'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/Context';
import { CartContext } from '../Context/CartContext';

const Details = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()

  const {Mode} = useContext(Context)
  const {state,dispatch} = useContext(CartContext)
 
console.log(state)






  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json))
  }, [id])
  return (
    <div className={Mode == false ? "details" : "detailsDark"}>
      <div className='DetailsCard' key={details.id}>
        <div className="image-detail">
          <img src={details.image} alt="" />
        </div>
        <div className="detailsinfo">
          <h2>{details.title}</h2>
          <span>₦ {details.price}</span>
          <p>{details.description}</p>
          <button onClick={()=> dispatch({type:"Add to cart",payload:details})}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
