import { BASE_URL } from "../constants/api";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products?limit=12`);
  if (!response.ok) throw new Error("No se pudieron obtener los productos");

  const data = await response.json();
  return data.products;
}

export async function getProductById(productId) {
  const response = await fetch(`${BASE_URL}/products/${productId}`);

  if (response.status === 404) return null;
  if (!response.ok) throw new Error("No se pudo obtener el producto");

  return response.json();
}

export async function createProduct(product) {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("No se pudo crear el producto");
  return response.json();
}
