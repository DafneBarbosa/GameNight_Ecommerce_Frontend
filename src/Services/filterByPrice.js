export default async function filterByPrice(max_price,setProducts) {
    try {
      const products = await fetch("http://localhost:8080/products/price/0.0/" + max_price)
        .then((response) => response.json());
      setProducts(products);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }