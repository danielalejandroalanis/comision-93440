import { useEffect, useState } from "react";
import { getProducts } from "../services/products.service";

const withProducts = (Component) => {
  return function ProductsContainer(props) {
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      getProducts()
        .then((products) => {
          setProducts(products.products);
        })
        .catch((error) => setIsError(true));
    }, []);

    return <Component {...props} products={products} isError={isError} />;
  };
};

export default withProducts;
