import img1 from "./category image/designpen/61uhwbwNhzL._AC_UL640_FMwebp_QL65_.webp"
import img2 from "./category image/designpen/btspen.webp"
import img3 from "./category image/designpen/gunpen.webp"
import img4 from "./category image/designpen/logopen.webp"
import img5 from "./category image/designpen/swordpen2.jpg"
import img6 from "./category image/designpen/swordpen.webp"

import "./Category.css";

const Pen = [
    {
        img: img1,
        name: "Salt",
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
       details: "Pure cane sugar.",
    },
    {
        img: img4,
        name: "Rice",
        details: "Basmati rice, long grain.",
    },
    {
       img:img5,
        name: "Wheat Flour",
        details: "Whole wheat flour, finely milled.",
    },
    {
        img: img6,
        name: "Tea Leaves",
        details: "Premium quality tea leaves, 1kg pack.",
    }
    
];

function Desing(){
    return(
        <div className="Grocery categoryItems ">
            {Pen.map((item, idx) => (
                <div key={idx} className=" product-card  "> 
                    <img src={item.img} alt={item.name} className="product-image pen-image" /> 
                    <h3 className=" product-title pen-details">{item.name}</h3>
                    {/* <p className=" product-info ">{item.details}</p> */}
                </div>
            ))}
        </div>
    )
}
export default Desing;