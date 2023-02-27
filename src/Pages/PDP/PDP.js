import React, { useState } from 'react';
import "./PDP.css";
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

export default function PDP() {
  const location = useLocation();

  //useState for bigImg
  const [imgSrc, setImgSrc] = useState(location.state.img);

  //useState for Selection of Attributes
  const [colorisActive, setColorIsActive] = useState(null);
  const [isActive, setIsActive] = useState([]);
  //useState for Cart
  

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
      console.log(...isActive);
      return data.product.attributes.map((attr) => (
        <>
        <div key={attr.id}>{attr.name}:</div>
         {attr.name === "Color"? attr.items.map((item) => (<div onClick={() => setColorIsActive(item.displayValue)} className={colorisActive === item.displayValue? 'activeColorDiv' : 'colorDiv'} style={{backgroundColor: item.value, width: "32px", height: "32px"}} key={item.id}>{" "}</div>)) : attr.items.map((item) => (<div onClick={() => (isActive.map((arrItem) => (arrItem.includes(attr.name))).includes(true)? null : setIsActive([attr.name + ' ' + item.displayValue, ...isActive]))} key={item.id} className={isActive.includes(attr.name + ' ' + item.displayValue)? 'activeDispValDiv' : 'dispValDiv'}>{item.displayValue}</div>))}
         </>
         ));
    };

    function DisplayDescription() {
      const htmlString = data.product.description;
      const reactElement = parse(htmlString);

      return reactElement;
    }

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
  <div className='prodDiscrip'>
  <DisplayDescription />
  </div>
  </div>
  );
}