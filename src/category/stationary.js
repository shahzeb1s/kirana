import img1 from "./category image/pens.avif";
import img2 from "./category image/notebook.avif";
import img3 from "./category image/schoolbottle.avif";
import img4 from "./category image/lunchBox.avif";
import img5 from "./category image/pencilBOx.avif"
import "./Category.css";
import img6 from "./category image/sketch.webp";
import img7 from "./category image/pensilcolor.avif"
import img8 from "./category image/cryonecolor.avif"
import img9 from "./category image/multihilighter.jpg"
const stationaryItems = [
    {
        id: 1,
        name: "Ball Point Pen",
        price: 10,
        brand: "Reynolds",
        category: "Writing",
        image: img1,
        inStock: true
    },
    {
        id: 2,
        name: "Notebook",
        price: 45,
        brand: "Classmate",
        category: "Books",
        image: img2,
        inStock: true
    },
    {
        id: 3,
        name: "Water Bottle",
        price: 199,
        brand: "Milton",
        category: "Accessories",
        image: img3,
        inStock: true
    },
    {
        id: 4,
        name: "Lunch Box",
        price: 299,
        brand: "Milton",
        category: "Accessories",
        image:  img4,
        inStock: true
    },
    {
        id: 5,
        name: "Pencil Box",
        price: 99,
        brand: "Generic",
        category: "Storage",
        image: img5,
        inStock: true
    },
    {
       id: 6,
       image:img6,
       name:"sketch color" ,
       price:"best Price",
       brand:"Apsara Camline Doms ",

    },
    {
       id: 7,
       image:img7,
       name:"Pencil color" ,
       price:"best Price",
       brand:"Apsara Camline Doms ",

    },
    {
       id: 8,
       image:img8,
       name:"crayons color" ,
       price:"best Price",
       brand:"Apsara Camline Doms ",

    },
    {
       id: 7,
       image:img9,
       name:"Highlighter and Sketch" ,
       price:"best Price",
       brand:"Apsara Camline Doms ",

    },
];

function Stationary() {
    return (
       <div className="Stationary categoryItems " >
            {stationaryItems.map((item, idx) => (
                <div key={idx} className="product-card">
                    <img src={item.image} alt={item.name} className="product-image " />
                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-price">{item.price}</p>
                    <p className="product-info">{item.details}</p>
                </div>
            ))}
        </div>
    );
}

export default Stationary;