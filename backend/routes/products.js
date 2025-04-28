// // const express = require('express');
// // const router = express.Router();
// // const sorobanService = require('../services/sorobanService');

// // // Add a new product
// // router.post('/add', async (req, res) => {
// //   try {
// //     const { name, description, price } = req.body;
// //     const productId = await sorobanService.addProduct(name, description, price);
// //     res.json({ productId });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // Get product by ID
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const id = parseInt(req.params.id);
// //     const product = await sorobanService.getProduct(id);
// //     res.json(product);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // Get total products
// // router.get('/', async (req, res) => {
// //   try {
// //     const total = await sorobanService.totalProducts();
// //     res.json({ total });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const sorobanService = require('../services/sorobanService');

// // Add a new product to the blockchain
// router.post('/add', async (req, res) => {
//   try {
//     const { name, description, price } = req.body;
//     const productId = await sorobanService.addProduct(name, description, price);
//     console.log("Product added:", { name, description, price, productId });
//     res.json({ productId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // Get product by ID from the blockchain
// router.get('/:id', async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const product = await sorobanService.getProduct(id);
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get total products stored on the blockchain
// router.get('/', async (req, res) => {
//   try {
//     const total = await sorobanService.totalProducts();
//     res.json({ total });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const sorobanService = require('./sorobanService');  // Your service for Soroban interactions

// POST route to add a product
router.post('/add', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const productId = await sorobanService.addProduct(name, description, price);
    console.log("Product added:", { name, description, price, productId });
    res.json({ productId, name, description, price }); // Send the added product details back
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET route to get all products (for re-fetching after adding a new product)
router.get('/products', async (req, res) => {
  try {
    const total = await sorobanService.getTotalProducts();  // Get the total product count
    const products = [];
    for (let i = 1; i <= total; i++) {
      const product = await sorobanService.getProduct(i);  // Fetch individual product data
      products.push(product);
    }
    res.json(products);  // Send all products back
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
