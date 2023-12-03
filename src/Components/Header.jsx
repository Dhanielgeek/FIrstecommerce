import React,{useState,useContext} from 'react'
import { Context } from '../Context/Context';
import './Style.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClear } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Header = () => {

const {Mode,setMode} = useContext(Context)

const {state} = useContext(CartContext)

// console.log(state)

    const [Toggle, setToggle] = useState(false)

    const HandleToggle = ()=>{
        setToggle(!Toggle)
    }
  return (
    <header className={Mode == false ? "header" : "headerdark"}>
        <div className={Mode == false ?  "logoName" : "logoNamedark"}>
            <h3>Dani's</h3>
        </div>
        <section className='Navlink'>
            <NavLink to='/'  className={({isActive})=>
        isActive ? "active" : "inactive"}>Home</NavLink>
            <NavLink to='/details' className={({isActive})=>
        isActive ? "active" : "inactive"}>Details</NavLink>
            <NavLink to='/category' className={({isActive})=>
        isActive ? "active" : "inactive"}>Category</NavLink>
            <NavLink to='/cart' className={({isActive})=>
        isActive ? "active" : "inactive"}>Cart</NavLink>
            <section className='logs'>
            <label>
        <input type="checkbox" checked={Mode} onChange={()=>setMode(!Mode)} />
        </label>
        <div className="cartlogo">
            <div className="circle">
                <p>
                 {/* {state.length} */}
                </p>
            </div>
            <NavLink to='/cart'>
            <MdOutlineShoppingCart className='cartlo'  /> 
            </NavLink>
        </div>
            </section>
        </section>
       <section className='mediascreen'>
        {
            Toggle === false ? <RxHamburgerMenu onClick={HandleToggle} style={{cursor:'pointer'}}/> : <MdOutlineClear onClick={HandleToggle} style={{cursor:'pointer'}}/>
        }
       </section>
       {
            Toggle ? ( <section className='Navhold'>
            <NavLink to='/'  className={({isActive})=>
        isActive ? "active" : "inactive"}>Home</NavLink>
            <NavLink to='/details' className={({isActive})=>
        isActive ? "active" : "inactive"}>Details</NavLink>
            <NavLink to='/category' className={({isActive})=>
        isActive ? "active" : "inactive"}>Category</NavLink>
            <NavLink to='/cart' className={({isActive})=>
        isActive ? "active" : "inactive"}>Cart</NavLink>
        </section>) : null
        }
    </header>
  )
}

export default Header