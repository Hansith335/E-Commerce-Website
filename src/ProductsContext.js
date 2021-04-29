import React, {createContext, useState} from 'react';

import dslr1 from "./images/dslr1.jpg";
import Headphone1 from "./images/Headphone1.jpg";
import iphone1 from "./images/iphone1.jpg";
import watch1 from "./images/Watch1.jpg";
import menstshirt from "./images/mentshirt.jpg";
import Shoes from "./images/shoes2.jpg";
import cycle from "./images/cycle.jpg";
import shoes1 from "./images/Shoes1.jpg";
import jeans from "./images/jeans.jpg";
//Trending
import Macbook1 from "./images/Macbook1.jpg";
import Disinfectant1 from "./images/Disinfectant1.jpg";
import Disinfectant2 from "./images/Disinfectant2.jpg";
import dslr2 from "./images/dslr2.jpg";
import Headset2 from "./images/Headset2.jpg";
import Bed1 from "./images/Bed1.jpg";
import Samsung1 from "./images/Samsung1.jpg";
import Shoes2 from "./images/shoes2.jpg";
import watch2 from "./images/watch2.jpg";
//Clothings
import Women_Apparel from "./images/Women_Apparel1.jpg";
import Clothing10 from "./images/Clothing10.jpg";
import Clothing2 from "./images/Clothing2.jpg";
import Clothing3 from "./images/Clothing3.jpg";
import Clothing4 from "./images/Clothing4.jpg";
import Clothing5 from "./images/Clothing5.jpg";
import Clothing6 from "./images/Clothing6.jpg";
import Clothing7 from "./images/Clothing7.jpg";
import Clothing8 from "./images/Clothing8.jpg";
//Grocery
import Grocery1 from "./images/Grocery1.jpg";
import Grocery2 from "./images/Grocery2.jpg";
import Grocery3 from "./images/Grocery3.jpg";
import Grocery4 from "./images/Grocery4.jpg";
import Grocery5 from "./images/Grocery5.jpg";
import Grocery6 from "./images/Grocery6.jpg";
import Grocery7 from "./images/Grocery7.jpg";
import Grocery8 from "./images/Grocery8.jpg";
//Books
import Book1 from "./images/Book1.jpg";
import Book2 from "./images/Book2.jpg";
import Book3 from "./images/Book3.jpg";
import Book4 from "./images/Book4.jpg";
import Book5 from "./images/Book5.jpg";
import Book6 from "./images/Book6.jpg";
import Book7 from "./images/Book7.jpg";
import Book8 from "./images/Book8.jpg";
import Book9 from "./images/Book9.jpg";
//Elcetronics
import Electronics1 from "./images/Electronics1.jpg";
import Electronics2 from "./images/Electronics2.jpg";
import Electronics3 from "./images/Electronics3.jpg";
import Electronics4 from "./images/Electronics4.jpg";
import Electronics5 from "./images/Electronics5.jpg";
import Electronics6 from "./images/Electronics6.jpg";
import Electronics7 from "./images/Electronics7.jpg";
import Electronics8 from "./images/Electronics8.jpg";
import Electronics9 from "./images/Electronics9.jpg";
//Mobile
import Mobile1 from "./images/Mobile1.jpg";
import Mobile2 from "./images/Mobile2.jpg";
import Mobile3 from "./images/Mobile3.jpg";
import Mobile4 from "./images/Mobile4.jpg";
import Mobile5 from "./images/Mobile5.jpg";
import Mobile6 from "./images/Mobile6.jpg";
import Mobile7 from "./images/Mobile7.jpg";
import Mobile8 from "./images/Mobile8.jpg";
import Mobile9 from "./images/Mobile9.jpg";
//Home&Kitchen
import Hk1 from "./images/Hk1.jpg";
import Hk2 from "./images/Hk2.jpg";
import Hk3 from "./images/Hk3.jpg";
import Hk4 from "./images/Hk4.jpg";
import Hk5 from "./images/Hk5.jpg";
import Hk6 from "./images/Hk6.jpg";
import Hk7 from "./images/Hk7.jpg";
import Hk8 from "./images/Hk8.jpg";
import Hk9 from "./images/Hk9.jpg";
//Furniture
import Furniture1 from "./images/Furniture1.jpg";
import Furniture2 from "./images/Furniture2.jpg";
import Furniture3 from "./images/Furniture3.jpg";
import Furniture4 from "./images/Furniture4.jpg";
import Furniture5 from "./images/Furniture5.jpg";
import Furniture6 from "./images/Furniture6.jpg";
import Furniture7 from "./images/Furniture7.jpg";
import Furniture8 from "./images/Furniture8.jpg";
import Furniture9 from "./images/Furniture9.jpg";

export const ProductsContext = createContext();

const ProductsContextProvider =(props)=>{
    const [Furniture] = useState([
        {id:1, name:'CupBoard', price: 46000, image:Furniture1},
        {id:2, name:'Chair', price: 1850, image:Furniture2},
        {id:3, name:'Table', price: 72000, image:Furniture3},
        {id:4, name:'Table', price: 82459, image:Furniture4},
        {id:5, name:'Study Table', price: 2350, image:Furniture5},
        {id:6, name:'Chair', price: 2500 , image:Furniture6},
        {id:7, name:'Table', price: 89600, image:Furniture7},
        {id:8, name:'CupBoard', price: 91250, image:Furniture8},
        {id:9, name:'Table', price: 9200, image:Furniture9}
    ])
    const [Home_Kitchen] = useState([
        {id:1, name:'Sofa', price: 46000, image:Hk1},
        {id:2, name:'Cups', price: 1850, image:Hk2},
        {id:3, name:'Bottle', price: 72000, image:Hk3},
        {id:4, name:'Grinder', price: 82459, image:Hk4},
        {id:5, name:'Bottles', price: 2350, image:Hk5},
        {id:6, name:'Chair', price: 2500 , image:Hk6},
        {id:7, name:'Steel Bottle', price: 89600, image:Hk7},
        {id:8, name:'Glass', price: 91250, image:Hk8},
        {id:9, name:'Sofa', price: 9200, image:Hk9}
    ])
    const [Mobile] = useState([
        {id:1, name:'Samsung', price: 46000, image:Mobile1},
        {id:2, name:'Oppo', price: 1850, image:Mobile2},
        {id:3, name:'Apple', price: 72000, image:Mobile3},
        {id:4, name:'Motorlo', price: 82459, image:Mobile4},
        {id:5, name:'Garnet', price: 2350, image:Mobile5},
        {id:6, name:'BlackBerry', price: 2500 , image:Mobile6},
        {id:7, name:'Iphone', price: 89600, image:Mobile7},
        {id:8, name:'Samsung Pro Plus', price: 91250, image:Mobile8},
        {id:9, name:'Redmi', price: 9200, image:Mobile9}
    ])
    const [Electronics] = useState([
        {id:1, name:'Hp Laptop', price: 46000, image:Electronics1},
        {id:2, name:'Gaming Gadgets', price: 1850, image:Electronics2},
        {id:3, name:'Apple', price: 72000, image:Electronics3},
        {id:4, name:'MacBooK', price: 82459, image:Electronics4},
        {id:5, name:'Gaming Gadgets', price: 2350, image:Electronics5},
        {id:6, name:'Pineapple Pack', price: 2500 , image:Electronics6},
        {id:7, name:'MacBook 4', price: 89600, image:Electronics7},
        {id:8, name:'MacBook Pro Plus', price: 91250, image:Electronics8},
        {id:9, name:'DSLR', price: 9200, image:Electronics9}
    ])
    const [Books] = useState([
        {id:1, name:'Who are you', price: 6000, image:Book1},
        {id:2, name:'The persistent pegion', price: 1850, image:Book2},
        {id:3, name:'The chronicles of nirvana', price: 2000, image:Book3},
        {id:4, name:'Sun is the heaven', price: 2459, image:Book4},
        {id:5, name:'Your silence will not protect you', price: 2350, image:Book5},
        {id:6, name:'Pineapple Pack', price: 2500 , image:Book6},
        {id:7, name:'Harrypotter', price: 1600, image:Book7},
        {id:8, name:'Pride and prejudice', price: 1250, image:Book8},
        {id:9, name:'Rich dad poor dad', price: 1200, image:Book9}
    ])
    const [Grocery] = useState([
        {id:1, name:'Detergent Liquid', price: 6000, image:Grocery1},
        {id:2, name:'Grvital Scrub', price: 1850, image:Grocery2},
        {id:3, name:'Cinthol Body Soap', price: 2000, image:Grocery3},
        {id:4, name:'Surfactant Liquid', price: 2459, image:Grocery4},
        {id:5, name:'Sanitizer Spray', price: 2350, image:Grocery5},
        {id:6, name:'Pineapple Pack', price: 2500 , image:Grocery6},
        {id:7, name:'Disnfectant liquid', price: 1600, image:Disinfectant1},
        {id:8, name:'Lemon Seeds', price: 1250, image:Grocery7},
        {id:9, name:'Remon Perfume', price: 1200, image:Grocery8}
    ])
    const [Cloths] = useState([
        {id:1, name:'Women Apparel', price: 6000, image:Women_Apparel},
        {id:2, name:'Women Dress Material', price: 1850, image:Clothing10},
        {id:3, name:'Thapazhar Womens T shirt', price: 2000, image:Clothing2},
        {id:4, name:'womens Clothings', price: 2459, image:Clothing3},
        {id:5, name:'Womens T Shirt', price: 2350, image:Clothing4},
        {id:6, name:'Women Dress Material', price: 2500 , image:Clothing5},
        {id:7, name:'Mens Clothings', price: 1600, image:Clothing6},
        {id:8, name:'Mens Clothings', price: 1250, image:Clothing7},
        {id:9, name:'Womens Dress Material', price: 1200, image:Clothing8}
    ])
    const [Trends] = useState([
        {id:1, name:'MACBOOK', price: 60000, image:Macbook1},
        {id:2, name:'WeCare Disinfectant', price: 850, image:Disinfectant1},
        {id:3, name:'DSLR', price: 20000, image:dslr2},
        {id:4, name:'Dynamic Disinfectant', price: 459, image:Disinfectant2},
        {id:5, name:'HEADPHONE', price: 550, image:Headset2},
        {id:6, name:'Easy Sleep Bed', price: 2500 , image:Bed1},
        {id:7, name:'SAMSUNG NOTE 10', price: 600, image:Samsung1},
        {id:8, name:'Alexa Shoes', price: 1050, image:Shoes2},
        {id:9, name:'Rolex Watch', price: 1200, image:watch2}
    ])
    const [products] = useState([
        {id:1, name:'DSLR', price: 1000, image:dslr1},
        {id:2, name:'HeadPhone', price: 850, image:Headphone1},
        {id:3, name:'Iphone', price: 20000, image:iphone1},
        {id:4, name:'Watch', price: 459, image:watch1},
        {id:5, name:'Mens T Shirt', price: 350, image:menstshirt},
        {id:6, name:'Camlin Watch', price: 2500 , image:cycle},
        {id:7, name:'Shoes', price: 600, image:Shoes},
        {id:8, name:'Alexa Shoes', price: 1050, image:shoes1},
        {id:9, name:'Blue Jeans', price: 1200, image:jeans}
    ])
    return (
        <ProductsContext.Provider value={{Products: [...products], Trends: [...Trends], Cloths: [...Cloths], Grocery: [...Grocery], Books: [...Books], Electronics: [...Electronics], Mobile: [...Mobile],Home_Kitchen: [...Home_Kitchen], Furniture: [...Furniture]}}>
            {props.children}
        </ProductsContext.Provider>
    );
};
export default ProductsContextProvider;
