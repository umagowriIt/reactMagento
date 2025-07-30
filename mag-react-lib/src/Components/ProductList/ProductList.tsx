import React, { useEffect, useState } from "react";
import { useAxiosFetch } from "../../Hooks/useAxiosFetch";
import { Default_Product_List_layout, Layout_Types } from "../../constants/Layouts";
import { getLayouts } from "../../helpers/layoutsHelper";

export interface ProductListProps {
  url: string;
  pagination?: boolean;
  pageSize?: number;
  layout?: string;
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
  const {
    loading: prodLoading,
    error: prodApiError,
    data: products,
  } = useAxiosFetch(props.url);

  const [LayoutComponent, setLayoutComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadLayout = async () => {
      const layoutModule = await getLayouts(props.layout, Layout_Types.PRODUCT_LIST);
      if (isMounted) {
        setLayoutComponent(() => layoutModule.default);
      }
    };
    loadLayout();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.layout]);


//   const getLayouts = (layout: string | undefined) => {
//         if(!layout) {
//             return import(`../../Layouts/ProductList/${Default_Product_List_layout}`);
//         }
//         return import(`../../Layouts/ProductList/${layout}`);
     
//   };

  return (
    <div>
      <h2>Product List</h2>
      {prodLoading ? (
        <p>Loading products...</p>
      ) : prodApiError ? (
        <p>Error loading products: </p>
      ) : (
        <>
          {Array.isArray(products) && LayoutComponent ? (
            products.map((product: any) => (
              <LayoutComponent key={product.id} {...product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;