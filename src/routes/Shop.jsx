import { Link } from "react-router-dom"
import Card from "../components/Card.jsx"

export default function Shop() {
    return (
        <>
            {/* <h1>this is SHop!!</h1> */}
            <Link to={"/"} className="go-back">Goback</Link>

            <Card />
        </>
    )
}