import img1 from "./category image/cons.avif";
import img2 from "./category image/choco.avif";
import img3 from "./category image/mava.jpg";
import img4 from "./category image/cup.jpg";
import "./Category.css";
const CreamPro =[{
    img:img1,
    name:"Cons",
    price:"10 To 40",
    details:"Ice cream is a frozen dessert made from dairy products, typically milk and cream, combined with sweeteners and flavorings.",
    falavour:"Butterscotch, Chocolate, Strawberry, Vanilla, ",
    },
    {
    img:img2,
    name:"Choco Crunch",
    price:"10 To 30",
    details:"Choco Crunch is a delightful ice cream flavor that combines rich chocolate with crunchy bits, creating a satisfying texture and taste. ",
    falavour:"Chocolate,Strawberry",
    },
    
    {img : img3,
    name:"Mava Kulfi",
    price:"10 To 30",
    details:"Mava Kulfi is a traditional Indian frozen dessert made from thickened milk (mava), sugar, and flavored with cardamom, saffron, or pistachios.",
    falavour:"Mango,Milk"
    },
    {
    img:img4,
    name:"Ice Cup",
    price:"10 To 30",
    details:"Ice Cup is a simple and refreshing frozen treat typically made from flavored ice or fruit juices poured into small cups and frozen until solid.",
    falavour:"vanilla,pista,Rambow,Chocolate,Strawberry,",
    },


]


function IceCream() {
    return(
        <div className="categoryItems">
           { CreamPro.map((item, idx) => (
            <div className="product-card" key={idx}>
                <img src={item.img} alt={item.name} className="product-image" key={idx} />
                <h3 className=".product-title">{item.name}</h3>
                <p className="product-price ">₹{item.price}</p>
                {/* <p className="product-info">{item.details}</p> */}
                <p className="product-flavour">Flavours: {item.falavour}</p>
            </div>
           ))}
        </div>
    )
}

export default IceCream;