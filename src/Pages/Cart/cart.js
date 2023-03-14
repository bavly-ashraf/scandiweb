import React, { useEffect, useState } from 'react';
import CartItem from '../../Components/Cart Item/cartItem';

export default function Cart() {
  //localStorage.clear('items');
const [itemArrDisp, setItemArrDisp] = useState([]);
  useEffect(() => {
    const itemArr = JSON.parse(localStorage.getItem('cartItemArr'));
    if ((itemArr == null || itemArr === [null])){
      console.log('quit successfully!');
    }
    else {
      setItemArrDisp(itemArr);
      console.log('Set Successfully 2');
      }
}, []);

const CartArr = () => {
if (JSON.parse(localStorage.getItem('cartItemArr')) == null || JSON.parse(localStorage.getItem('cartItemArr')) === [null])
{
return <h2>No items in the cart yet</h2>
}
else {
console.log('Running!!');
console.log('cartItemArr' + JSON.parse(localStorage.getItem('cartItemArr')));
console.log('useState itemArrDisp' + itemArrDisp);
return itemArrDisp.map((item) => (
 <div key={item}>
  <CartItem itemArr={item} key={item}/>
 </div>
))}};

  return (
  <>
   <h1>Cart</h1>
    <CartArr />
    <button onClick={() => localStorage.clear('cartItemArr')}>Temp Reset</button>
  </>
)};