import React, { useEffect } from 'react';
import CartItem from '../../Components/Cart Item/cartItem';

export default function Cart() {

  useEffect(() => {
    const itemArr = JSON.parse(localStorage.getItem('cartItemArr'));
    localStorage.setItem('items', JSON.stringify([itemArr]))
    console.log(JSON.parse(localStorage.getItem('items')));
  }, []);


const CartArr = () => {

return JSON.parse(localStorage.getItem('items')).map((item) => (
 <div key={item}>
  <CartItem itemArr={item} />
 </div>
))};

  return (
  <>
   <h1>Cart</h1>
    <CartArr />
  </>
)};