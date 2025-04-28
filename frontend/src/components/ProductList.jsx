import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.addProduct({ name, description, price });
    alert('Product added successfully!');
    setName('');
    setDescription('');
    setPrice('');
    // Trigger re-fetch
    fetchProducts();
  } catch (error) {
    console.error(error);
    alert('Error adding product.');
  }
};

const fetchProducts = async () => {
  try {
    const total = await api.getTotalProducts();
    const fetchedProducts = [];
    for (let i = 1; i <= total; i++) {
      const product = await api.getProduct(i);
      fetchedProducts.push(product);
    }
    setProducts(fetchedProducts);
  } catch (error) {
    console.error(error);
    alert('Error fetching products.');
  }
};

  useEffect(() => {
    async function fetchProducts() {
      try {
        const total = await api.getTotalProducts();
        const fetchedProducts = [];
        for (let i = 1; i <= total; i++) {
          const product = await api.getProduct(i);
          fetchedProducts.push(product);
        }
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
        alert('Error fetching products.');
      }
    }


    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(prod => (
        <div key={prod.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Price: {prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
