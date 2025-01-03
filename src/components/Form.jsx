import { useState } from "react"
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

export default function Form(props) {
    const [showComponent, setShowComponent] = useState(false);
    const [total, setTotal] = useState();
    const [count, setCount] = useState();
    const [confirm, setConfirm] = useState(false);
    
    const openForm = () => {
        calc()
        setShowComponent(true);
    };

    const closeForm = () => {
        setShowComponent(false);
    };

    const calc = () => {
        if (props.count === 0) {
            setTotal(props.prod.price)
            setCount(1)
        }else {
            const total = props.count * props.prod.price;
            setTotal(total);
            setCount(props.count)
        }
    }

    const handleConfirm = () => {
        setConfirm(true);
        setShowComponent(false);
    }

    return (
        <>
            <button onClick={openForm}>Add to Cart</button>
            {showComponent &&
                <div className="form">
                    <div className="form-child">
                        <h1>{props.prod.title}</h1>
                        <img src={props.prod.images[0]} style={{width: "250px", maxHeight: "400px", objectFit: "cover", borderRadius: "10px"}}/>
                        <p>quantity: <strong>{count}</strong></p>
                        <p>total amount: <strong>$ {total}</strong></p>
                        <div>
                            <button className="close" onClick={closeForm}>Close</button>
                            <button className="confirm" onClick={handleConfirm}>Confirm</button>
                    </div>
                        </div>
                </div>
            }
        </>
    )
}