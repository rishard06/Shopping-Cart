// import { useState } from 'react'
import { Link, NavLink, Outlet } from "react-router-dom"
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import '../styles/App.css'

export default function Root() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Link to={"/home"}>Home</Link>
      <br />
      <NavLink to={"/shop"}>Shop</NavLink>
      <Outlet />
    </>
  )
}
