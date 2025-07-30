import React from 'react';

import './App.css';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList url="http://localhost:4000/api/products" layout="layout1" />

      <br /> <br />
      <hr />
        <br /> <br />
           <ProductList url="http://localhost:4000/api/products" layout="layout2" /> 

    </div>
  );
}

export default App;
