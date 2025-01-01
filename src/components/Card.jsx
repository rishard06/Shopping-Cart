import FetchAPI from "./FetchAPI.jsx" 
import { useEffect, useState } from "react"

export default function Card() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        FetchAPI('https://fakestoreapi.com/products').then((data) => {
            setProducts(data)
        }).catch((error) => {
            console.error(error);
        });
    }, []) 
    console.log(products)
    return (
        <div >
            <ul style={{display: "flex", flexGrow: "1", flexWrap: "wrap", listStyle: "none", gap: "20px", justifyContent: "center"}}>
                {products.map((prod) => (
                    <li key={prod.id} style={{width: "300px", border: "2px solid", borderRadius: "20px", padding: "0 20px 20px 20px"}}>
                        <p><strong>{prod.title}</strong></p>
                        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                            <img 
                                src={prod.image} 
                                alt="img" 
                                loading="lazy"
                                style={{ width: "130px", height: "150px", objectFit: "conver"}} />
                            <div>
                                <p>$ {prod.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}