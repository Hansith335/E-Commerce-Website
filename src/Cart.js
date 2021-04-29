import React,{useContext} from 'react';
import "./Cart.css";
import { CartContext } from "./CartContext.js";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Cart=()=>{
    const { shoppingCart, totalprice, qty, dispatch} = useContext(CartContext);
    return (
        <div className="cart-container">
            <div className="cart-details" style={{ marginTop: '100px'}}>
                { shoppingCart.length > 0 ? 
                  shoppingCart.map( cart=>(
                      <div className="cart" key={cart.id}>
                          <span className="cart-image"><img src={cart.image} alt="image not found"/></span>
                          <span className="cart-product-name">{cart.name}</span>
                          <span className="cart-product-price">₹{cart.price}.00</span>
                          <span className="inc" onClick={()=> dispatch({type: 'INC', id: cart.id, cart:cart})}><AddIcon/></span>
                          <span className="product-quantity">{cart.qty}</span>
                          <span className="dec" onClick={()=> dispatch({type: 'DEC', id: cart.id, cart:cart})}><RemoveIcon/></span>
                          <span className="product-total-price">₹{cart.qty*cart.price}.00</span>
                          <span className="delete-product" onClick={()=> dispatch({type: 'DELETE', id: cart.id, cart:cart})}><DeleteOutlineIcon style={{ fontSize: '30px'}}/></span>
                      </div>
                  ))
                 : 'Sorry your cart is currently empty'}
            </div>
            { shoppingCart.length > 0 ?  
            <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items:</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="total-price">Total Price:</div>
                        <div className="price">₹{totalprice}.00</div>
                    </div>
                </div>
            </div>
            : ""}
        </div>
    );
}
export default Cart;
