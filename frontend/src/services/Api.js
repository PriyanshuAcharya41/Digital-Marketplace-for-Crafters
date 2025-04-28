const API_URL = 'http://localhost:5000/api/products';
async function addProduct(product) {
  const response = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  return response.json();
}

async function getProduct(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getTotalProducts() {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data.total;
}

export default { addProduct, getProduct, getTotalProducts };
