import React from "react";
import "./ProductShow.css";
import dinshaws from "./runimage/dinshaws.png";

// Example product data (replace with your real data or props)
const products = [
  {
    
    image: dinshaws,
  },
  {
    image: require("./runimage/clinic.avif"),
  },
  {
    image: require("./runimage/britania.png"),
  },
  {
    image: require("./runimage/clinic.avif"),
  },
  {
    image: require("./runimage/dabure.png"),
  },
  {
    image: require("./runimage/withoba.jpg"),
  },
  {
    image: require("./runimage/parle.png"),
  },
  {
    image: require("./runimage/cello.png"),
  },
  {
    image: require("./runimage/classmate.png"),
  },
  
];


function ProductShow() {
    const allProducts = [...products, ...products];
  return (
    <section className="product-showcase-section">
      <h2 className="product-showcase-title">Popular Brands</h2>
      <div className="product-marquee-outer">
        <div className="product-marquee-inner">
          {allProducts.map((p, idx) => (
            <div className="product-showcase-card" key={idx}>
              <img src={p.image} alt={p.name} className="product-showcase-img" />
              <h3>{p.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShow;