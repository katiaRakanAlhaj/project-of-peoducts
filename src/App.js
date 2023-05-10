import { useState, useEffect } from 'react';
import Products from './components/products';
import NavbarComponent from './components/Navbar';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/product-details';
import ProductCrud from './components/product-crud';
const App = () => {
  const [product, setProduct] = useState([]);
  // fetch All Product from APi
  const getAllProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProduct(res.data);
    console.log(product);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  // delete row data
  const handleDelete = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    });
    setProduct(product.filter((pro) => pro.id !== id));
  };
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Products product={product} />} />
          <Route
            path="/details"
            element={
              <ProductCrud product={product} handleDelete={handleDelete} />
            }
          />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
