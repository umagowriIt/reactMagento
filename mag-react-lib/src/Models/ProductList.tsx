export interface Product {
    id: number;
    name: string;
    description?: string;
    price: string;
}

export interface ProductListData {
  items: Product[];
  [key: string]: any;
}