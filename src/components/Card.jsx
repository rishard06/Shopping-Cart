import FetchAPI from "./FetchAPI.jsx" 
import { useEffect, useState } from "react"
import Quantity from "./Quantity.jsx";

export default function Card() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        FetchAPI('https://api.escuelajs.co/api/v1/products?offset=0&limit=40').then((data) => {
            setProducts(data);
            setIsLoading(false);
        }).catch((error) => {
            console.error(error);
        });
    }, []) 
    // console.log(products)
    return (
        <>
            {isLoading ? <span className="loader"></span> : null } 
            <div className="card-parent">
                <ul style={{display: "flex", flexGrow: "1", flexWrap: "wrap", listStyle: "none", gap: "20px", justifyContent: "center", padding: "10px"}}>
                    {products.map((prod) => (
                        <li className="card" key={prod.id} style={{width: "300px", border: "2px solid var(--pale-green)", borderRadius: "20px", padding: "20px"}}>
                            <p><strong>{prod.title}</strong></p>
                            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                                <img 
                                    src={prod.images} 
                                    alt={prod.name} 
                                    loading="lazy"
                                    style={{ width: "130px", height: "150px", objectFit: "cover", borderRadius: "10px"}} />
                                <div>
                                    <p>$ {prod.price}</p>
                                    {/* <NavLink to={"/shop/cart"}>nav</NavLink> */}
                                    <Quantity prod={prod}/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}