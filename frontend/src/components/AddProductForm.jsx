import React, { useState } from 'react';
import api from '../services/api'; // Import the api.js file

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, description, price };
    
    try {
      const response = await api.addProduct(product); // API call to add product
      console.log('Response from API:', response); // This will log the response from API (product ID, etc.)
      
      // Assuming response contains product ID or success message
      alert('Product added successfully! ID: ' + response.productId);
      
      // Clear the form fields after successful addition
      setName('');
      setDescription('');
      setPrice('');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
