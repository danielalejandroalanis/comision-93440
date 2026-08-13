import { useEffect, useState } from "react";
import { getProducts } from "../services/products.service";

const withProducts = (Component) => {
  return function ProductsContainer(props) {
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getProducts()
        .then((products) => {
          setProducts(products.products);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }, []);

    return <Component {...props} products={products} isError={isError} isLoading={isLoading} />;
  };
};

export default withProducts;
