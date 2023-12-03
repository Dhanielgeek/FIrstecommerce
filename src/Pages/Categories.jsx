import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './page.css'


const Categories = () => {
  const [Categories, setCategories] = useState([]);
  const Category = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setCategories(json.filter((el)=> el.category === Category.id))
      );
  }, [Category.id]);

  return (
    <main className="maincartegory">
    {
      Categories.map((items)=>(
        <div key={items.id} className="catecard">
        <div className="image-hold">
          <img src={items.image} alt="" />
        </div>
       <div className="abouttext">
       <p>{items.title}</p>
        <span>₦ {items.price}</span>
       </div>
        </div>
      ))
    }
    </main>
  );
};

export default Categories;

