import React from "react";
import './cartItem.css';

const CartItem = () => {

return(
<>
<div className="gridContainer">
 <div className="prodInfo">
  <h1>Product Name</h1>
  <h2>Product Price</h2>
  <p>Attributes</p>
 </div>

 <div className="counterContainer">
    <button className="btn">+</button>
    <p>Counter</p>
    <button className="btn">-</button>
 </div>
 <div className="imgContainer">
    <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png" alt="Google Logo" width={'200px'} />
 </div>
</div>
</>
)};

export default CartItem;