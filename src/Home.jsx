import { useEffect, useState } from 'react';
import productService from './services/productService';
import { ProductGrid } from './components/Product';

function App() {
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    productService.getAllProducts().then(data => {
      setProducts(data);
    });
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}

export default App;
