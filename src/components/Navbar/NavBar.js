import React from "react";
import "./NavBar.css";
import logo from "./Natural-logos_white.png"
import ShoppingCard from "../Shopping/ShoppingCard";

const NavBar = () => {
    return (
        <nav className="Navbar">
            <img className="Logo" src={logo} alt="logo"/>
            <ul className="Navbar__item">
                <li> <a className="Navbar__link" href="#">Home</a> </li>
                <li> <a className="Navbar__link" href="#">Shop</a> </li>
                <li> <a className="Navbar__link" href="#">About us</a> </li>
                <li><ShoppingCard/></li>
            </ul>
        </nav>
    )
}

export default NavBar;