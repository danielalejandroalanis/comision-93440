import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import { PRODUCTS_COLLECTION_NAME } from "../constants/products";

export async function getProducts() {
  const productsCollection = collection(db, PRODUCTS_COLLECTION_NAME);

  const productsSnapshot = await getDocs(productsCollection);

  return productsSnapshot.docs.map((productDocument) => ({
    id: productDocument.id,
    ...productDocument.data(),
  }));
}

export async function getProductById(productId) {
  const productDocument = doc(db, PRODUCTS_COLLECTION_NAME, productId);

  const productSnapshot = await getDoc(productDocument);

  return {
    id: productSnapshot.id,
    ...productSnapshot.data(),
  };
}

export async function createProduct(product) {
  const response = await fetch(`/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("No se pudo crear el producto");
  return response.json();
}
