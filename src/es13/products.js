import fetch from "node-fetch";

// await top level su uso sin necesidad de async

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products } ;