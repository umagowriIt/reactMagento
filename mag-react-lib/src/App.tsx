
import './App.css';
import ProductList, { ProductListProps } from './Components/ProductList/ProductList';

function App() {

  const props : ProductListProps = {
    theme : "blue",
    token : "fsdfd",
    pageSize: 10,
    pagination : true,
    url : "http://localhost:4000/api/products",
    layout: "layout1"
  }

  return (
    <div className="App">
      <ProductList  {...props} />
    </div>
  );
}

export default App;
