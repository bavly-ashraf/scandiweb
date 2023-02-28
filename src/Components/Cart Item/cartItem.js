import React from "react";

const CartItem = () => {

return(
<>
<div style={{display: 'inline-block'}}>
<h1>Product Name</h1>
<h2>Product Price</h2>
<p>Attributes</p>
</div>
<div style={{display: 'inline-grid', position: 'absolute', bottom: '280px', left: '1000px'}}>
    <button style={{width: '45px', height: '45px', fontSize: '20px', border: '1px solid #1D1F22', backgroundColor: 'white'}}>+</button>
    <p>Counter</p>
    <button style={{width: '45px', height: '45px', fontSize: '20px', border: '1px solid #1D1F22', backgroundColor: 'white'}}>-</button>
</div>
<div style={{width: '200px', height: '288px', display: 'inline-block', position: 'absolute', bottom: '180px', left: '1100px'}}>
    <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png" alt="Google Logo" width={'200px'} />
</div>
</>
)};

export default CartItem;