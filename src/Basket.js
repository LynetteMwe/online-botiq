import React from "react";

const Basket = (props) => {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0:50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

 return ( 
 <aside className="block col-1">
  <h2>Cart Items</h2>
  <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
  {cartItems.map((product)=>(
    <div key={product.id} className="row">
      <div className="col-2">{product.name}</div>
      <div className="col-2">
        <button onClick={()=>onAdd(product)} className="add">+</button> 
        <button onClick={()=>onRemove(product)} className="remove">-</button>
      </div>
      <div className="col-2 text-right">
        {product.qty} x ${product.price.toFixed(2)}
      </div>
      </div>
  ))}
  {cartItems.length !== 0 && (
    <>
    <hr></hr>
    <div className="row">
      <div className="col-2">Items Price</div>
      <div className="col-1 text-right">${itemsPrice}</div>
    </div>
    <div className="row">
      <div className="col-2">Tax Price</div>
      <div className="col-1 text-right">${taxPrice}</div>
    </div>
    <div className="row">
      <div className="col-2">Shipping Price</div>
      <div className="col-1 text-right">${shippingPrice}</div>
    </div>
    <div className="row">
      <div className="col-2"><strong>Total Price</strong></div>
      <div className="col-1 text-right"><strong>${totalPrice}</strong></div>
    </div>
    <hr/>
    <div className="row">
      <button onClick={()=>
        alert('Implement CheckOut')
      }>CheckOut</button>
    </div>
    </>

  )}

 </aside>
  
  );
}
 
export default Basket;