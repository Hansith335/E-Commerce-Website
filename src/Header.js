import React,{useContext} from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import './Header.css';
import {CartContext} from "./CartContext.js"

function Header(){
    const {qty} = useContext(CartContext);
    return(
        <nav>
            <ul className="left">
                <li ><Link to="/" ><span className="company_name">WebShop</span></Link></li>
            </ul>
            <ul className="right">
                <li><Link to="Cart"><span className="shoppingcart"><ShoppingBasketIcon className="shoppingicon"/></span><span className="cartcount">{qty}</span></Link></li>
            </ul>
        </nav>
    )

}
export default Header;