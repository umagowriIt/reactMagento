import styles from './layout2.module.css';
import { Product } from '../../../Models/ProductList';

function Layout2({ product }: { product: Product }) {
  const { id, name, price, description } = product;
  return (
    <article key={id} className={`${styles.listProduct} ${styles.lpLayout2}`}>
      <h3>{name}</h3>
      <desc>{description} at just CAD {price}</desc>
    </article>
  );
}

export default Layout2;