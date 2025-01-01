import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Link to={"/"} className="go-back">Goback</Link>
            <h1 style={{textAlign: "center", position: "relative",top: "200px"}}>This is a Home Page</h1>
        </>
    )
}