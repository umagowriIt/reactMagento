import React, {  useEffect, useState } from "react";
import { useAxiosFetch } from "../../Hooks/useAxiosFetch";
import { Layout_Types } from "../../constants/Layouts";
import { getLayouts } from "../../helpers/layoutsHelper";
import { ProductListData } from "../../Models/ProductList";
import Pagination from "./Pagination";
import { useDynamicTheme } from "../../Hooks/useDynamicTheme";
import styles from "./product.module.css";


export interface ProductListProps {
  url: string;
  pagination?: boolean;
  pageSize?: number;
  layout?: string;
  theme: string;
  token: string;
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
  const { token, pageSize = 10, pagination = true, layout = "layout1", url, theme = "red" } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [LayoutComponent, setLayoutComponent] = useState<React.ComponentType<any> | null>(null);
  const params = { searchCriteria: { pageSize, currentPage } };

  useDynamicTheme(theme);

  const {
    loading: prodLoading,
    error: prodApiError,
    data,
  } = useAxiosFetch<ProductListData>(url, params, token); 


  useEffect(() => {
    let isMounted = true;
    const loadLayout = async () => {
      const layoutModule = await getLayouts(layout, Layout_Types.PRODUCT_LIST);
      if (isMounted && layoutModule && layoutModule.default) {
        setLayoutComponent(() => layoutModule.default);
      }
    };
    loadLayout();
    return () => {
      isMounted = false;
    };
  }, [layout]);


  return (
    <div>
      <h2>Product List</h2>
      {prodLoading ? (
        <p>Loading products...</p>
      ) : prodApiError ? (
        <p>Error loading products: {prodApiError}</p>
      ) : (
        <>
        <div className={styles.productList}>
          {data && Array.isArray(data?.items) && LayoutComponent ? (
            data.items.length > 0 ? (
              data.items.map((product: any) => (
                <LayoutComponent key={product.id || product.sku} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )
          ) : (
            <p>No products found.</p>
          )}
        </div>
        {pagination ? <><Pagination setCurrentPage={setCurrentPage} totalCount={111} pageSize={pageSize} currentPage={currentPage}  /></> : <> <button>show more products...</button></>}
        </>
      )}
    </div>
  );
};

export default ProductList;