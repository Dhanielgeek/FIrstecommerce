import React,{useState,useEffect} from 'react'
import './page.css'

const Hero = () => {


const [Text, setText] = useState('NEW ARRIVALS')

useEffect(()=>{
  const intervalId = setInterval(() => {
    setText((prevText) => {
      if (prevText === 'NEW ARRIVALS') {
        return 'NEW LAUNCH!!!';
      } else if (prevText === 'NEW LAUNCH!!!') {
        return 'OFFER AVAILABLE';
      } else {
        return 'NEW ARRIVALS';
      }
    });
  }, 2000);

  return () => clearInterval(intervalId);
},[])




  return (
    <div className='Hero'>
        <div className="wrapper">
            <div className="textcontent">
                <h3>{Text}</h3>
                <p>CHECK OUT OUR LATEST SPRING/SUMMER 2023 COLLECTION! THE ENTIRE COLLECTION IS INSPIRED BY MODERN ASIAN FASHION AND TIMELESS AMERICAN STREET STYLE.</p>
                <div className="other">
                    <nav>SHOP COLLECTION</nav>
                    <nav>WHO WE ARE</nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero