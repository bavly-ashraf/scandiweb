import React from 'react';
import "./PDP.css";
//import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

export default function PDP() {

  const location = useLocation();

  /*
  function DisplayProductGallery() {
    const GET_PRODUCT_Gallery = gql`
    query {
      category (input: {title: "${catName}"}) {
        products {
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
  
  const { loading, error, data } = useQuery(GET_PRODUCT_Gallery);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
      return data.category.products.map((prod) => (
      <div key={prod.name} className={prod.inStock? "container" : "containerNotInStock"}>
        <Link to={"/PDP"} state={{prod: prod.name}} style={{textDecoration: "none", color: 'inherit'}}>
        <p key={prod.name} className={prod.inStock? "inStock" : "notInStock"}>Out Of Stock</p>
      <Container key={prod.name} prodName={prod.name} prodPrice={prod.prices[0].currency.symbol + prod.prices[0].amount} imgSrc={prod.gallery[0]} />
      </Link>
      </div>
      ));
    };
*/
  return (
  <div className='mainDiv'>
  <div className='smallImgs'>
  <img src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' width={"79px"} />
  <img src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' width={"79px"} />
  <img src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' width={"79px"} />
  <img src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' width={"79px"} />
  </div>
  <img src='https://www.google.com.eg/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' width={"610px"} className='bigImg' />
  <h1 className='prodHeader'>This is PDP Page {location.state.prod}</h1>
  <h2 className='sizeHeader'>Size:</h2>
  {/*Size Component*/}
  <h2 className='colorHeader'>Color:</h2>
  {/*ColorSwatch Component*/}
  <h2 className='priceHeader'>Price:</h2>
  <h1 className='mainPriceHeader'>Price</h1>
  <button className='addBtn'>ADD TO CART</button>
  <p className='prodDiscrip'>product discription</p>
  </div>
  );
}