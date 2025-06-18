import img1 from "./category image/parleg.jpg";
import img2 from "./category image/marie gold.webp";
import img3 from "./category image/sunfeast-bounce.jpg"
import img4 from "./category image/goodDay.webp"
import "./Category.css"
const Biscuits=[{
    img:img1,
    name:"Parle-G Biscuits",
    price:"₹5 to ₹20",
},
{
    img:img2,
    name:" Marie Gold Biscuits",
    price:"₹5 to ₹10",
},
{
    img:img3,
    name:" Bounce Biscuits",
    price:"₹5 to ₹10",
},
{
    img:img4,
    name:"Good Day Biscuits",
    price:"₹5 to ₹10",
},
]

function Bisciut() {
    return (
        <div className="categoryItems">
            {Biscuits.map((item, idx) => (
                <div className="product-card" key={idx}>
                    <img src={item.img} alt={item.name} className="product-image" />
                    <h3 className="product-title">{item.name}</h3>
                    <p className="product-price">{item.price}</p>
                    {/* <p className="product-info">{item.details}</p> */}
                </div>
            ))}
        </div>
    );
}

export default Bisciut;