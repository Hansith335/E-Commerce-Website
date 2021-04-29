import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar">
            <ul className="list_main">
                <li className="home_field"><Link to="/" style={{ textDecoration: "none"}}>Home</Link></li>
                <li className="trending"><Link to="Trending" style={{ textDecoration: "none"}}>Trending</Link></li>
                <li className="cloth"><Link to="Clothing" style={{ textDecoration: "none"}}>Clothings&Accessories</Link></li>
                <li className="grocery"><Link to="Grocery" style={{ textDecoration: "none"}}>Grocery</Link></li>
                <li className="books"><Link to="Books" style={{ textDecoration: "none"}}>Books</Link></li>
                <li className="electronics"><Link to="Electronics" style={{ textDecoration: "none"}}>Electronics</Link></li>
                <li className="mobile"><Link to="Mobile" style={{ textDecoration: "none"}}>Mobile</Link></li>
                <li className="home_appliances"><Link to="Home_Kitchen" style={{ textDecoration: "none"}}>Home&Kitchen</Link></li>
                <li className="furniture"><Link to="Furniture" style={{ textDecoration: "none"}}>Furniture</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;