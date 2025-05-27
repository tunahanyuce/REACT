import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='nav_list'>
             <li className='nav__item'>
                <NavLink to="/" className={({isActive})=>isActive ? "nav__link nav__link--active": "nav__link"}>Home</NavLink>
             </li>
             <li className='nav__item'>
                <NavLink to="/about" className={({isActive})=>isActive ? "nav__link nav__link--active": "nav__link">About Me</Navlink>
             </li>
             <li className='nav__item'>
                <a href="/">My Projects</a>
             </li>
             <li className='nav__item'>
                <a href="/">Contact</a>
             </li>
        </ul>
           

    </nav>
  )
}

export default Navbar