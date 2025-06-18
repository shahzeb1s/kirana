
import React from 'react';
import './NewItem.css';
import img1 from "./category/category image/compose1.webp";
import img2 from "./category/category image/compose2.webp";
import img3 from "./category/category image/compose 3.webp"
import img4 from "./category/category image/compose4.jpg"
import img5 from "./category/category image/penset1.webp"
import img6 from "./category/category image/penset2.webp"
import img7 from "./category/category image/eraser1.jpg"
import img8 from "./category/category image/eraser2.jpg"
const trendingItems = [
    {
        id: 1,
        image: img1,
       name:"Calci Compose"
    },
    {
        id: 2,
        image: img2,
        name:"Big Size Pouch"
    },
    {
        id: 3,
       image:img3,
       name:"Multi button compose"
    },
    {
        id: 4,
        image: img4,
        name:"Calci and Light"
       
    }
];
const trendingItems2 = [
  {
    image:img5,
    name:"Dairy And Pens",
  },
  {
    image:img6,
    name:"Small DAiry",
  },
  {
    image:img7,
    name:"Eraser Set",
  },
  {
    image:img8,
    name:"Erasers Designz",
  },
]
function NewItem() {
    return (
      <div className='Newdiv' id='products'>
      <h2 className="new-title ">NEW TRENDING PRODUCT</h2>
      
      <div className='items-container'>
        <section className="newitem-section">
          <div className="newProduct">
              {trendingItems.map((p, idx) => (
                <div className=" newCard" key={idx}>
                  <img src={p.image} alt={p.name} className=" newImage" />
                  <h3>{p.name}</h3>
                </div>
              ))}
              
            </div>

        </section>
        <section className="newitem-section">

          <div className="newProduct">
              {trendingItems2.map((p, idx) => (
                <div className=" newCard" key={idx}>
                  <img src={p.image} alt={p.name} className=" newImage" />
                  <h3>{p.name}</h3>
                </div>
              ))}
              
            </div>
        </section>

      </div>
      </div>
  );
}

export default NewItem;