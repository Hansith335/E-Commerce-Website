import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Home() {
  return (
    <div className="home">
      <div className="col-2">
        <h1>Happy New Year<br/></h1><h2>Give Your Workout<br/>A New Style!!</h2>
          <p>Enjoy online shopping with WebShop</p>
          <Link to="Trending" style={{ textDecoration:"none"}}><a href="" className="btn">Explore Now <ArrowRightAltIcon className="arrow"/></a></Link>
      </div>
      <div className="col-2">
        <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Sale-Stickers-PNG/Discount_Shopping_Cart_Clipart_PNG_Picture.png?m=1438656901" alt="" ></img>
      </div>
    </div>
    );
}
export default Home;