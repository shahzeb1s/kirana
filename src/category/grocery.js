import img1 from "../image/salt.jpg";
import img2 from "../image/istockphoto-475071270-612x612.jpg";
import img3 from "../image/istockphoto-538071854-612x612.jpg";
import img4 from "../image/istockphoto-1193536444-612x612.jpg";
import img5 from "../image/wheath.jpg";
import img6 from "./category image/chaipatti.jpg"
import img7 from "./category image/moong.avif"
import img8 from "./category image/toor dal.avif"
import img9 from "./category image/masoor.avif"
import img10 from "./category image/chana.avif"
import img11 from "./category image/urad.avif"
import img12 from "./category image/dryfriut.avif"
import "./Category.css";
function Grocery({selectedCategory}){
const Product = [
    {
        img: img1,
        name: "Salt",
        price: "₹20/kg",
        details: "Refined iodized salt.",
    },
    {
        img: img2,
        name:"Cooking Oil",
        details: "Refined sunflower oil, 1L/1Kg.",
    }, 
    {
       img: img3,
       name: "Sugar",
       price: "₹40/kg",
       details: "Pure cane sugar.",
    },
    {
        img: img4,
        name: "Rice",
        price: "₹50/kg",
        details: "Basmati rice, long grain.",
    },
    {
       img:img5,
        name: "Wheat Flour",
        price: "₹30/kg",
        details: "Whole wheat flour, finely milled.",
    },
    {
        img: img6,
        name: "Tea Leaves",
        price: "₹100/kg",
        details: "Premium quality tea leaves, 1kg pack.",
    },
    {   img: img7,
        name:"moon dal",
        price:"Best Price",
        details:"High-quality split yellow lentils, rich in protein and fiber.",
    },
    {
        img: img8,
        name:"Toor Dal",
        price:"Best Price",
        details:"Split pigeon peas, commonly used in Indian cuisine, rich in protein.",
    },
    {
        img: img9,
        name:"Masoor Dal",
        price:"Best Price",
        details:"Red lentils, quick-cooking and nutritious, ideal for soups and dals.",
    },
    {
        img: img10,
        name:"Chana Dal",
        price:"Best Price", 
        details:"Split chickpeas, high in protein and fiber, used in various dishes.",
    },
    {
        img: img11,
        name:"Urad Dal",
        price:"Best Price",
        details:"Black gram lentils, used in South Indian dishes like dosa and idli.",
    },
    {
        img: img12,
        name:"Dry Fruits",
        price:"Best Price", 
        details:"A mix of almonds, cashews, and raisins, perfect for snacking or cooking.",
    },
    // {
    //     img: img6,
    //     name:"Shampoo",
    //     price:"₹1 to ₹2",
    //     details:"Herbal shampoo for all hair types, enriched with natural ingredients.",
    // }

    
];

    return(
        <div className="Grocery categoryItems">
            {Product.map((item, idx) => (
                <div key={idx} className=" product-card ">
                        
                    <img src={item.img} alt={item.name} className="product-image" />
                    <h3 className=" product-title">{item.name}</h3>
                    <p className="product-price">{item.price}</p>
                    {/* <p className="product-info  ">{item.details}</p> */}
                </div>
            ))}
        </div>
    )
}
export default Grocery;