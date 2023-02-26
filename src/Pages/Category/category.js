import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Container from '../../Components/Container/container';
import './category.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../../Components/Navbar/NavbarElements';
import { Link } from 'react-router-dom';

const Category = ({navData}) => {
  //console.log(currentCat);
  const [catName, setCatName] = useState("all");



  function DisplayCategories() {
    //console.log( data );
    return  navData.map(({ name }) => (

      <NavLink to='/' key={name} onClick={(e) => setCatName(e.currentTarget.text)}>
        {name}
      </NavLink>
    ));
  };

  function DisplayProducts() {
  const GET_PRODUCTS_NAMES = gql`
  query {
    category (input: {title: "${catName}"}) {
      products {
        id,
        description,
        inStock,
        gallery,
        name,
        prices {
          currency {
            symbol,
            label
          }
          amount
        }
      }
    }
  }
`;

const { loading, error, data } = useQuery(GET_PRODUCTS_NAMES);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

    return data.category.products.map((prod) => (
    <div key={prod.id} className={prod.inStock? "container" : "containerNotInStock"}>
      <Link to={"/PDP"} state={{prod: prod.name, id: prod.id, img: prod.gallery[0]}} style={{textDecoration: "none", color: 'inherit'}}>
      <p key={prod.description} className={prod.inStock? "inStock" : "notInStock"}>Out Of Stock</p>
    <Container key={prod.name} prodName={prod.name} prodPrice={prod.prices[0].currency.symbol + prod.prices[0].amount} imgSrc={prod.gallery[0]} />
    </Link>
    </div>
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
          <NavBtnLink to='/cart'>My Cart</NavBtnLink>
        </NavBtn>
      </Nav>
   <h1 className = "catHeader">{catName}</h1>
   <DisplayProducts />
  </>
  );
};

export default Category;