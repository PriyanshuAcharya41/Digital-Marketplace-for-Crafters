// (Dummy placeholder - we'll integrate real Soroban later)
async function addProduct(name, description, price) {
    console.log(`Pretend we called Soroban to add ${name}`);
    return Math.floor(Math.random() * 1000); // Fake product ID
  }
  
  async function getProduct(id) {
    console.log(`Pretend we fetched product ID ${id}`);
    return {
      id,
      name: "Sample Product",
      description: "Sample Description",
      price: 100,
    };
  }
  
  async function totalProducts() {
    console.log(`Pretend we counted products`);
    return 10;
  }
  
  module.exports = {
    addProduct,
    getProduct,
    totalProducts
  };
  