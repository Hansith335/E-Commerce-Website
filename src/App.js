import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Navbar from './Navbar';
import ProductsContextProvider from "./ProductsContext.js";
import Products from "./Products.js";
import Cart from "./Cart.js";
import Notfound from "./Notfound.js";
import CartContextProvider from "./CartContext.js"
import Trends from "./Trending.js";
import Cloths from "./Clothings.js";
import Grocery from "./Grocery.js";
import Books from "./Books.js";
import Electronics from "./Electronics.js";
import Mobile from "./Mobile.js";
import Home_Kitchen from "./Home_kitchen.js";
import Furniture from "./Furniture.js"
function App() {
  return (
      <div className="app">
       <ProductsContextProvider>
       <CartContextProvider>
        <Router>
          <Header/>
          <Navbar/>
            <Switch>
              <Route path="/" exact component={ Products}/>
              <Route path="/Cart" exact component={Cart}/>
              <Route path="/Trending" exact component={Trends}/>
              <Route path="/Clothing" exact component={Cloths}/>
              <Route path="/Grocery" exact component={Grocery}/>
              <Route path="/Books" exact component={Books}/>
              <Route path="/Electronics" exact component={Electronics}/>
              <Route path="/Mobile" exact component={Mobile}/>
              <Route path="/Home_Kitchen" exact component={Home_Kitchen}/>
              <Route path="/Furniture" exact component={Furniture}/>
              <Route component={Notfound}/>
            </Switch>
        </Router>
        </CartContextProvider>
        </ProductsContextProvider>
      </div>
    );
  }
export default App;