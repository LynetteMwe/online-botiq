import React from 'react';


const Product = ({products, title, onAdd}) => {
  // const products = props.products;
  // const title = props.title; 
  return (
    <div>  
      <h2>{title}</h2>
        {products.map((product)=>(  
          <div className="row display" key={product.id}> 
          <img src={product.image} alt={product.name} className="small" />                  
          <h3>{product.name}</h3>
          <div>${product.price}</div>
          <button onClick={()=>onAdd(product)} >Add to Cart</button>
          </div>
        ))};
    </div>
      )
   
}
 
export default Product;