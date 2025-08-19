import React from 'react';
import { Product } from '../../../Models/ProductList';
import styles from './layout1.module.css';

function Layout1({ product }: { product: Product }) {
  const { id, name, price } = product;
  return (
    <div key={id} className={`${styles.listProduct} ${styles.lpLayout1}`}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Layout1;