import React,{ useContext} from 'react';
import {ProductsContext}  from "./ProductsContext.js";
import "./Products.css";
import { CartContext } from "./CartContext.js";
function Mobile() {
    const {Mobile} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    

    return (
        <>
        <div className="products">
            {Mobile.map((product)=>(
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image}  alt="not found"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name"> {product.name}</div>
                       
                        <div className="product-price"> ₹{product.price}.00</div>
                    </div>
                    <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product: product})}>
                        <button >add to cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
};

export default Mobile;
