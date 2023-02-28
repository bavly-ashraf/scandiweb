import { useQuery, gql } from '@apollo/client';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Category from "./Pages/Category/category";
import Cart from "./Pages/Cart/cart";
import CartOverlay from "./Pages/CartOverlay/cartOverlay";
import CurrencySwitcher from "./Pages/CurrencySwitcher/currencySwitcher";
import PDP from "./Pages/PDP/PDP";
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Components/Navbar/NavbarElements';
import emptyCart from './Icons/Empty Cart.svg';
import scandiwebLogo from './Icons/a-logo.svg';
//import currencySwitcherIcon from './Icons/Group 1.svg';

export default function App() {
  const [catName, setCatName] = useState("all");

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const { loading, error, data } = useQuery(GET_CATEGORIES);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

function DisplayCategories() {
  //console.log( data );
  return  data.categories.map(({ name }) => (

    <NavLink to='/' style={catName === name? {color: '#5ECE7B'}: null} key={name} onClick={(e) => setCatName(e.currentTarget.text)}>
      {name}
    </NavLink>
  ));
};

  return (
    <>
        <Nav>
      <Bars />
        <NavMenu>
         <DisplayCategories />
        </NavMenu>
      <NavBtn>
        <NavBtnLink to='/'><img src={scandiwebLogo} alt='Scandiweb Logo' /></NavBtnLink>
      </NavBtn>
      {/*<NavBtn>
        <NavBtnLink to='/currencySwitcher'><img src={currencySwitcherIcon} alt='Currency Switcher' /></NavBtnLink>
      </NavBtn>*/}
      <NavBtn>
        <NavBtnLink to='/cart'><img src={emptyCart} alt='Empty Cart' /></NavBtnLink>
      </NavBtn>
    </Nav>
      <Routes>
          <Route path="/" element={<Category catName={catName} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartOverlay" element={<CartOverlay />} />
          <Route path="/PDP" element={<PDP />} />
          <Route path="/currencySwitcher" element={<CurrencySwitcher />} />
      </Routes>
    </>
  );
}