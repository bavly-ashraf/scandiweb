import React from 'react';

const Container = ({prodName, prodPrice, imgSrc}) => {

    


    return (
<>
  <img src={imgSrc} alt={prodName} width={"356px"} />
  <p style={{fontSize: "20px"}}>{prodName}</p>
  <p style={{fontSize: "15px"}}>{prodPrice}</p>
</>
);
};

export default Container;