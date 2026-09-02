import React from "react"
import { Search} from "lucide-react";
import logo from "../../assets/logo/logo.png";
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
       <header className="navbar-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="SmartPrice" className="navbar-logo-image" />
                </div>
                <div className="search-bar">
                <input type="search" placeholder="Search products..." aria-label="Search products" />
                <button type="button" aria-label="Search"><Search className="search-icon" /></button>
            </div>

            <ul className="navbar-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link className="navbar-signup" to="/create">Register</Link></li>
            </ul>

        </nav>
      </header>
    );
}

export default Navbar;
