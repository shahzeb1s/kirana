import React, { useState } from 'react';
import img1 from "./category/category image/daal.avif";
import img2 from "./image/sationary.jpg";
import img3 from "./image/iceCream.avif";
import img4 from "./image/toys.avif";
import img5 from "./category/category image/designpen/swordpen.webp";
import Toys from"./category/Toys";
import Grocery from './category/grocery';
import Stationary from "./category/stationary"
import './Cart.css';
import HeroSection from './heroSection';
import { useRef } from 'react';
import Desing from './category/Design-Pen';
import IceCream from './category/IceCream';
import img6 from "./category/category image/bisciut.avif";
import Bisciut from './category/Bisciut';
import img7 from "./category/category image/soap.avif";
const Cart = ({selectedCategory,setSelectedCategory}) => {
    const CartCategory = [
        {
            name: "Grocery",
            description: "Daily essentials and food items",
            img: img1,
        },
        {
            name: "Stationary",
            description: "Office supplies and school items",
            img: img2,
        },
        {
            name:"Biscuits",
            description:"Delicious and crunchy biscuits",
            img:img6,
        },
        {
            name: "Ice Cream",
            description: "Frozen desserts and treats",
            img: img3,
        },
        {
            name: "Toys",
            description: "Fun and educational toys for children",
            img: img4,
        },
        {
            name:"Design-Pen",
            description:"Best choice for your design needs",
            img:img5,
        },
        {
            name:"Store-Items",
            description:"All store Items",
            img:img7,
        }
    ];
     const detailRef = useRef(null);
     React.useEffect(() => {
        if (selectedCategory && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [selectedCategory]);



    if(selectedCategory === "all"){
        return(
            <div className='AllItems'>
                
                    
                 <div className='grocery-all'>
                <Grocery/>   
                </div>
                 <div className='stationary-all'>
                <Stationary/>   
                </div>
                 <div className='toy-all'>
                <Toys/>   
                </div>
                 <div className='bis-all'>
                <Bisciut/>   
                </div>
                 <div className='ice-all'>
                <IceCream/>   
                </div>
            </div>
        )
    }
    

    const visibleCategories = selectedCategory
    ? CartCategory.filter(item => item.name === selectedCategory)
    : CartCategory;

    function categoryButton(name) {
        setSelectedCategory(name);
       
    }


    if (selectedCategory === "Grocery") {
        return ( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME
            </button>
        <Grocery selectedCategory={selectedCategory}/>
        </div>
            );
    } 
     else if (selectedCategory === "Stationary") {
         return ( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME

                </button>
        <Stationary />
        </div>
            );
    }
     else if (selectedCategory === "Design-Pen") {
         return ( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME

                </button>
        <Desing />
        </div>
            );
    }
    else if (selectedCategory === "Ice Cream"){
        return( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME
            </button>
            <IceCream />
        </div>
            );
    }
    else if(selectedCategory === "Toys"){
        return( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME
            </button>
            <Toys />
        </div>
            );
    }
    else if (selectedCategory === "Biscuits") {
        return ( <div ref={detailRef}>
            <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                Back TO HOME
            </button>
        <Bisciut />
        </div>
            );
    }


    return (
        <div className="cart-grid" id='Cart'>
            <h2 className='headingCate'>Categories</h2>
            {visibleCategories.map((item, idx) => (
                <div className="cart-card" key={idx}>
                    <div className="cart-card-img-wrap">
                        <img src={item.img} alt={item.name} className="cart-card-img" />
                    </div>
                    <div className="cart-card-content">
                        <h3 className="cart-card-title">{item.name}</h3>
                        <p className="cart-card-desc">{item.description}</p>
                        <button
                            className="cart-card-btn"
                            onClick={() => setSelectedCategory(item.name)}
                        >
                            View {item.name}
                        </button>
                    </div>
                </div>
            ))}
            {selectedCategory && (
                <button className="cart-card-btn" onClick={() => setSelectedCategory(null)}>
                    Show All Categories
                </button>
            )}
        </div>
    );
};

export default Cart;