import React, { useEffect } from 'react';
import CartItem from '../../Components/Cart Item/cartItem';

export default function Cart() {

  useEffect(() => {
    const itemArr = JSON.parse(localStorage.getItem('cartItemArr'));
    if ((itemArr == null || itemArr === [null])){
      console.log('quit successfully!');
    }
    else if (JSON.parse(localStorage.getItem('items')) == null || JSON.parse(localStorage.getItem('items')) === [null]) {
      localStorage.setItem('items', JSON.stringify(itemArr));
      console.log(JSON.parse(localStorage.getItem('items')));
      console.log('Set Successfully 1');
    }
    else if (itemArr === JSON.parse(localStorage.getItem('cartItemArr'))){
    console.log(JSON.parse(localStorage.getItem('items')));
    console.log('Set Successfully 2');
    }
    else {
      localStorage.setItem('items', JSON.stringify([itemArr, JSON.parse(localStorage.getItem('items'))]));
      console.log(JSON.parse(localStorage.getItem('items')));
      console.log('Set Successfully 3');
      }
});

const CartArr = () => {
if (JSON.parse(localStorage.getItem('items')) == null || JSON.parse(localStorage.getItem('items')) === [null])
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