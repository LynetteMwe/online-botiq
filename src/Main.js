import React, { useEffect, useState } from "react";
import Product from "./Product";



const Main = ({onAdd}) => {
 const [products, setProducts] = useState(null);
 const [isPending, setIsPending] = useState(true);
 const [error, setError] = useState(null);

 useEffect(()=>{
  fetch('http://localhost:8000/products')
   .then(res =>{
    if(!res.ok){
     throw Error('Could not fetch the data for that resource');
    }
    return res.json();
   })
   .then(data =>{
    setProducts(data);
    setIsPending(false);
    setError(null);
   })
   .catch((err)=>{
    setError(err.message);
    setIsPending(false);
   })
 }, []);
 return <main className="block col-2">
  {error && <div>{error}</div>}
  {isPending && <div>Loading...</div>}
  {products && <Product products={products} title ="All products" onAdd={onAdd}/>}  
      
 </main>  ;
}
 
export default Main;