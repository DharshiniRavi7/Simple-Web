import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar(){
    const navigate= useNavigate()
    return(<div className='navbar'>
        <div className="logo">Dharshini Ravi</div>
        <ul>
            <NavLink to="/">
            <li>Home</li>
            </NavLink>
            <NavLink to="/Projects"><li>Projects</li></NavLink>
            <NavLink to="/Contact"><li>Contact</li></NavLink>
            <NavLink to="/About"><li>About</li></NavLink>
        </ul>
        <button onClick={()=> navigate("/Login")}>Login</button>
    </div>)
}

export default Navbar