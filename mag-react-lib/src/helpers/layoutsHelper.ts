import { Default_Product_List_layout, Layout_Types } from "../constants/Layouts";

export const getDefaultLayouts = (type:string) => {
    switch (type) {
        case Layout_Types.PRODUCT_LIST:
            return import(`../Layouts/ProductList/${Default_Product_List_layout}/index.tsx`);
        // case Layout_Types.PRODUCT_DETAIL:
        //     return import(`../../Layouts/ProductDetail/${Default_Product_List_layout}`);            
        // case Layout_Types.CART:
        //     return import(`../../Layouts/Cart/${Default_Product_List_layout}`); 
        default:
            return import(`../Layouts/ProductList/${Default_Product_List_layout}/index.tsx`);  
    }
};

export const getLayouts = (layout: string | undefined, type: string) => {
        if(!layout) {
            return getDefaultLayouts(type);
        }

        return import(`../Layouts/ProductList/${layout}/index.tsx`);
     
  };