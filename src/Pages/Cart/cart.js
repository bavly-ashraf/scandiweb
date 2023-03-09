import React, { useEffect } from 'react';
import CartItem from '../../Components/Cart Item/cartItem';

export default function Cart() {

  useEffect(() => {
    const itemArr = JSON.parse(localStorage.getItem('cartItemArr'));
    if ((itemArr === null || itemArr === [null]) && (JSON.parse(localStorage.getItem('items')) === null || JSON.parse(localStorage.getItem('items')) === [null])){
      console.log('quit successfully!');
    }
    else {
    localStorage.setItem('items', JSON.stringify([itemArr, JSON.parse(localStorage.getItem('items'))]));
    console.log(JSON.parse(localStorage.getItem('items')));
    console.log('Set Successfully');
    }
});

const CartArr = () => {
if (JSON.parse(localStorage.getItem('items')) === (null || [null]))
{
return <h2>No items in the cart yet</h2>
}
else {
console.log('Running!!');
return JSON.parse(localStorage.getItem('items')).map((item) => (
 <div key={item}>
  <CartItem itemArr={item} />
 </div>
))}};

  return (
  <>
   <h1>Cart</h1>
    <CartArr />
    <button onClick={() => localStorage.clear('items') && localStorage.clear('cartItemArr')}>Temp Reset</button>
  </>
)};