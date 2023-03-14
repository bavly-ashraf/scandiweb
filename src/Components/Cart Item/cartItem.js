import React, { useState } from "react";
import './cartItem.css';

const CartItem = ({itemArr}) => {
   const [itemCounter, setItemCounter] = useState(1);
//console.log(itemArr);
return(
<>
<div className="gridContainer">
 <div className="prodInfo">
  <h1>{itemArr[3]}</h1>
  <h2>{itemArr[4]}</h2>
  {itemArr[0] === null? null : <><p>Color </p><div style={{backgroundColor: itemArr[0], width: "32px", height: "32px"}}></div></>}
  {itemArr[1].map((item) => (<p>{item}</p>))}
 </div>

 <div className="counterContainer">
    <button className="btn" onClick={() => setItemCounter(itemCounter + 1)}>+</button>
    <p style={{position: 'relative', left: '15px', fontSize: '18px' , fontWeight: 'bold'}}>{itemCounter}</p>
    <button className="btn" onClick={() => setItemCounter(itemCounter - 1)}>-</button>
 </div>
 <div className="imgContainer">
    <img src={itemArr[2]} alt={itemArr[3]} width={'200px'} />
 </div>
</div>
</>
)};

export default CartItem;