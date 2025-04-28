import React from 'react';
import AddProductForm from './components/AddProductForm.jsx';
import ProductList from './components/ProductList.jsx';


function App() {
  return (
    <div className="App">
      <h1>Digital Marketplace for Crafters</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
}

export default App;
