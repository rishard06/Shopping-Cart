import { useState } from "react"

export default function Form(props) {
    const [showComponent, setShowComponent] = useState(false);
    const [total, setTotal] = useState()

    if(showComponent) {
        // document.querySelector("body").style.overflow = "hidden";
    }
    if(!showComponent) {
        document.querySelector("body").style.overflow = "scroll";
        document.querySelector("ul").style.padding = "20px"
    }
    
    const openForm = () => {
        // alert(typeof(props.count))
        calc()
        setShowComponent(true);
    };

    const closeForm = () => {
        setShowComponent(false);
    };

    const calc = () => {
        if (props.count === 0) {
            setTotal(props.prod.price)
        }else {
            const total = props.count * props.prod.price;
            // alert(total);
            setTotal(total);
        }
    }

    return (
        <>
            <button onClick={openForm}>Add to Cart</button>
            {showComponent && 
                <div className="form">
                    <div>
                        <h1>{props.prod.title}</h1>
                        <img src={props.prod.image} style={{width: "250px"}} alt="" />
                        <p>total amount:    $ {total}</p>
                        <button onClick={closeForm}>close</button>
                    </div>
                </div>
            }
        </>
    )
}