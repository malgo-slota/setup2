import React from 'react'
import { NavLink } from 'react-router-dom';
import style from '../styles/navigation.module.scss';

export const Navigation = () => {
    
  return (
    <nav>
       <ul className={style["nav-links"]}>
        <li>
            <NavLink to={"/"}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={"/contact"}>
                Contact
            </NavLink>
        </li>
         <li>
            <NavLink to={"/about"}>
                About
            </NavLink>
        </li>
       </ul>
    </nav>
  )
}
