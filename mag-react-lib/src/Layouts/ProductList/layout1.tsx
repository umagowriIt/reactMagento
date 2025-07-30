import React from 'react';
import { Product } from '../../Models/ProductList';

function layout1( product : Product) {
  const { id, name, price } = product;
  return (
    <div key={id} className="listProduct lpLayout1">
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}

export default layout1;