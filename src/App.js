import './App.css';
import NavBar from './Navbar';
import Main from './Main';
import Basket from './Basket';
import { useState } from 'react';
// import Product from './Product';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
    const exist = cartItems.find(x=>x.id === product.id);
    if(exist){
      setCartItems(cartItems.map(x=> x.id ===product.id ? {...exist, qty:exist.qty + 1}:x
        )
        );
    }else{
      setCartItems([...cartItems,{...product, qty:1}])
    }
  }
  const onRemove =(product) =>{
    const exist = cartItems.find(x=>x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter(x=>x.id!==product.id));
    }else{
      setCartItems(cartItems.map(x=> x.id ===product.id ? {...exist, qty:exist.qty - 1}:x
        )
        );
    }
  }
  return (
    <div className="App">
      <NavBar/>
      <div className='row'>
        <Main onAdd={onAdd}/>
        <Basket onAdd ={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
    </div>
  );
}

export default App;
