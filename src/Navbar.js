import React from 'react';

const NavBar = ({countCartItems}) => {
 return ( 
  <navbar className='row block center'>
   <div>
    <a href='#/'>
     <h1>Elite Boutique</h1>
    </a>
   </div>
   <div>
    <a href='#/Cart'>
      
      Cart { ' '}
      {countCartItems?(
        <button className="badge">{countCartItems}</button>
      ) : (
        ''
      )} 
      
      </a>    <a href='#/signin'>SignIn</a>
   </div>
  </navbar>
  );
}
 
export default NavBar;