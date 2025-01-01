import { useState } from "react";
import Form from "./Form.jsx";

export default function Quantity(props) {
    const [count, setCount] = useState(0);
    
        const decreasCount = () => {
            if (count === 0) return 0
    
            setCount(count - 1);
        }
    
        const increaseCount = () => {
            setCount(count + 1);
        }

    return (
        <>
            <div className="quantity">
                <button onClick={() => decreasCount()}>-</button>
                <p>{count}</p>
                <button onClick={() => increaseCount()}>+</button>
            </div>
            <Form prod={props.prod} count={count}/>
        </>
    )
}