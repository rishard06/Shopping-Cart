import { useState } from "react"

export default function Form(props) {
    const [showComponent, setShowComponent] = useState(false);

    if(showComponent) {
        document.querySelector("body").style.overflow = "hidden";
    }
    if(!showComponent) {
        document.querySelector("body").style.overflow = "scroll";
        document.querySelector("ul").style.padding = "20px"
    }
    
    const openForm = () => {
        setShowComponent(true);
    };

    const closeForm = () => {
        setShowComponent(false);
    };

    return (
        <>
            <button onClick={openForm}>Add to Cart</button>
            {showComponent && 
                <div className="form">
                    <div>
                        <h1>{props.prod.title}</h1>
                        <img src={props.prod.image} style={{width: "250px"}} alt="" />
                        <button onClick={closeForm}>close</button>
                    </div>
                </div>
            }
        </>
    )
}