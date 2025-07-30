import React from 'react';
import { Product } from '../../Models/ProductList';

function layout1( product : Product) {
  const { id, name, price , description} = product;
  return (
    <article key={id} className="listProduct lpLayout2">
        <h1>Layout 2</h1>
      <h3>{name} </h3>
      <desc>{description } at just CAD {price}</desc>
      
    </article>
  );
}

export default layout1;