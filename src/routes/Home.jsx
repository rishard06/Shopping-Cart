import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export default function Home() {
    // const lisst = []
    // const [prod, setProd] = useState([]);

    // const location = useLocation();
    // const data = location.state?.user;
    // localStorage.setItem(`userdata${data.id}`, JSON.stringify(data))
    
    // useEffect(() => {
    //     const storedData = {...localStorage};
    //     for (const prop in storedData) {
    //         const data = JSON.parse(storedData[prop]);
    //         // lisst.push(data)
    //         setProd(data)
    //         console.log(prod)
    //     }
    // },[])

    
    return (
        <>
            <Link to={"/"} className="go-back">Goback</Link>
            <div>
                <h1 style={{textAlign: "center", position: "relative",top: "200px"}}>This is a Home Page</h1>
            </div>
        </>
    )
}