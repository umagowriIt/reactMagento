import React from "react";

export interface ProductListProps {
    // url of the API endpoint to fetch products
    url?: string;
    // optional: whether to show pagination; if turned off then lazy loading will be enabled
    pagination?: boolean;
    // optional: number of products to show per page
    pageSize?: number;
    // Layout of the product list; eg: layout1, layout2, etc.
    layout?: string;
}

const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
  return (
    <div>
      <h2>Product List</h2>
     
    </div>
  );
};

export default ProductList;