import React, { useContext } from 'react';
import './page.css';
import { MdDeleteOutline } from 'react-icons/md';
import { CartContext } from '../Context/CartContext';
import { Context } from '../Context/Context';

const Cart = () => {
  const { state,dispatch } = useContext(CartContext)

  const {Mode} = useContext(Context)

  console.log(state)

  return (
    <div className={Mode === false ? "Cartbody" : "cartbodydark"}>
      <div className='CartContainer'>
        <div className='cartheader'>
          <span>Shopping Cart</span>
          <h3>Total: ₦</h3>
          <div className='removeall'>
            <p>Remove All</p>
            <MdDeleteOutline
              className='delete'
              onClick={() => dispatch({ type: 'DeleteAll', payload: state.item })}
            />
          </div>
        </div>
        <div className='cartItem' key={state.id}>
          {state.map((items) => (
            <div className='cart-items' key={items.id}>
              <div className='item-img'>
                <img src={items.image} alt='' />
              </div>
              <div className='cart-details'>
                <h3>{items.title}</h3>
                <div className='cart-others'>
                  <div className='addsubitems'>
                    <p className='sub'>-</p>
                    <p>{items.QTY}</p>
                    <p
                      className='add'
                      // onClick={() => dispatch({ type: 'Increase_Amount', payload: { id: items.id } })}
                    >
                      +
                    </p>
                  </div>
                  <span>₦ {items.price}</span>
                  <MdDeleteOutline
                    className='deleteEach'
                    onClick={() => dispatch({ type: 'Delete', payload: items.id })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='checkout'>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



// import React, { useContext } from 'react';
// import './page.css';
// import { MdDeleteOutline } from 'react-icons/md';
// import { CartContext } from '../Context/CartContext';

// const Cart = () => {
//   const { state, dispatch } = useContext(CartContext);

//   const handleAddItems = (id) => {
//     // Dispatch your action for increasing item quantity here
//     dispatch({ type: 'INCREASE_AMOUNT', payload: { id } });
//   };

//   return (
//     <div className="Cartbody">
//       <div className="CartContainer">
//         <div className="cartheader">
//           <span>Shopping Cart</span>
//           <h3>Total : </h3>
//           <div className="removeall">
//             <p>Remove All</p>
//             <MdDeleteOutline
//               className="delete"
//               onClick={() => dispatch({ type: 'CLEAR_CART' })}
//             />
//           </div>
//         </div>
//         <div className="cartItem">
//           {state.item.map((items) => (
//             <div className="cart-items" key={items.id}>
//               <div className="item-img">
//                 <img src={items.image} alt="" />
//               </div>
//               <div className="cart-details">
//                 <h3>{items.title}</h3>
//                 <div className="cart-others">
//                   <div className="addsubitems">
//                     <p className="sub">-</p>
//                     <p>{items.Amount}</p>
//                     <p
//                       className="add"
//                       onClick={() => handleAddItems(items.id)}
//                     >
//                       +
//                     </p>
//                   </div>
//                   <span>₦ {items.price}</span>
//                   <MdDeleteOutline
//                     className="deleteEach"
//                     onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: items })}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="checkout">
//           <button>Check Out</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

