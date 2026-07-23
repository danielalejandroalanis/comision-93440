import { BASE_URL } from "../constants/api";

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    const data = response.json();

    return data;
  } catch (error) {
    return error;
  }
}
