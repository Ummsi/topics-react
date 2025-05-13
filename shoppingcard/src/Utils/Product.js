export async function getAllProducts(params) {
  try {
    const products = await fetch(
      "https://api.escuelajs.co/api/v1/products"
    ).then((res) => res.json());
    return products;
  } catch (error) {
    throw Error("Error fetching products", error);
  }
}
