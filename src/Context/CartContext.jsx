import { createContext,useReducer,useEffect,useState } from "react";


export const CartContext = createContext()

const InitalState = []


const Reducer = (state,action)=>{
 if(action.type === "Add to cart"){
    if(state.length === 0){
        const Qty = 1
        return [...state, {...action.payload, Qty : Qty}]
    }else{
        const Checkitem = state.findIndex((el) => el.id === action.payload.id)
        if(Checkitem == -1){
           return [...state, {...action.payload,Qty : 1}]  
        }
    console.log(Checkitem)
   
    }
    
   
 }
 else if(action.type === "Delete"){

    const Deleteitem = state.filter((el)=> el.id !== action.payload)
    return  Deleteitem
}
 else{
    return state
 }
}






const CartProvider = ({children})=>{

    const [state, dispatch] = useReducer(Reducer, InitalState)
    // const [Total, setTotal] = useState(0)


    // useEffect(()=>{
    //     setTotal(state.reduce((p,e)=>
    //           e.price * e.QTY + p
    //     ,0))
    //     console.log(Total)
    // },[Total])

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider


// if(state == 0){
//     const QTY = 1
//     return [...state,{...action.payload, QTY : QTY}]
//   }else{
//       const checkItem = state.findIndex((el)=> el.id == action.payload.id)
//       if(checkItem == -1){
//           return [...state, {...action.payload, QTY: 1}]
//       }else{
//           state[checkItem].QTY += 1
//       }
//   }