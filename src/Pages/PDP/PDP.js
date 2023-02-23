import React, { useState } from 'react';
import "./PDP.css";
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

export default function PDP() {
  const location = useLocation();

  const [imgSrc, setImgSrc] = useState(location.state.img);
  console.log(location.state.id);

    const GET_PRODUCT_Gallery = gql`
    query {
  product(id: "${location.state.id}") {
    id
    name
    gallery
    description
    prices {
      amount
      currency{
        label
        symbol
      }
    }
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
  }
}`;
  
  const { loading, error, data } = useQuery(GET_PRODUCT_Gallery);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  function DisplayProductGallery() {
      return data.product.gallery.map((prod) => (
        <img key={prod} src={prod} alt={data.product.name} width={"79px"} onClick={(e) => setImgSrc(e.target.src)} />
      ));
    };

    function DisplayDetails() {

      return data.product.attributes.map((attr) => (
        <>
        {attr.name}: <div style={attr.name === "Color"? {backgroundColor: attr.items[0].value, width: "32px", height: "32px"} : {}} key={attr.name}>{attr.name === "Color"? "" : attr.items[0].displayValue}</div>
        </>
      ));
    };

  return (
  <div className='mainDiv'>
  <div className='smallImgs'>
  <DisplayProductGallery />
  </div>
  <img src={imgSrc} alt={data.product.name} width={"610px"} className='bigImg' />
  <h1 className='prodHeader'>{location.state.prod}</h1>
  <div className='attrHeader'>
  <DisplayDetails />
  </div>
  <h2 className='priceHeader'>Price:</h2>
  <h1 className='mainPriceHeader'>{data.product.prices[0].currency.symbol}{data.product.prices[0].amount}</h1>
  <button className='addBtn'>ADD TO CART</button>
  <div className='prodDiscrip'>{data.product.description}</div>
  </div>
  );
}