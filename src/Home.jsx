import { useEffect, useState } from 'react';
import api from './api/api';
import ProductGrid from './components/Product/ProductGrid';

function App() {
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    api.getAllProducts().then(data => {
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
