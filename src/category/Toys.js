import img1 from "./category image/cricket.avif";
import img2 from "./category image/ball.avif";
import img3 from "./category image/badminton.avif";
import img4 from "./category image/cube.avif"; 
import "./Category.css";

const Toyproducts = [{
    img:img1,
    name:"Cricket Bat",
    price:"₹150",
    details:"A cricket bat is a flat, elongated piece of wood used in cricket, made from willow wood for strength and shock absorption. Features a handle and broad blade for effective ball striking.",
  },
  {
    img:img2,
    name:"Cricket Ball",
    price:"₹3 To ₹30",
    details:"A hard, leather-covered ball with cork core used in cricket. Available in red or white colors depending on game format. Essential for bowling and overall gameplay.",

  },
  {
    img:img3,
    name:"Badminton Racket",
    price:"₹80",
     details: "A lightweight racket used in badminton, made with aluminum or carbon fiber frame. Features string bed for hitting shuttlecock and comfortable grip handle.",
  },
  {
    img:img4,
    name:"Cube",
    price:"₹90",
    details:"A cube is a three-dimensional geometric shape with six equal square faces, twelve edges, and eight vertices. It is a regular hexahedron and is one of the five Platonic solids.",
  },

]

function Toys() {
    return(
        <div className="categoryItems">
            {
                Toyproducts.map((item, idx) => (
                    <div className="product-card" key={idx}>
                        <img src={item.img} alt={item.name} className="product-image " />
                        <h3 className="product-title">{item.name}</h3>
                        <p className="product-price">{item.price}</p>
                        {/* <p className="product-info">{item.details}</p> */}
                    </div>
                ))
            }
        </div>
    )}

    export default Toys;