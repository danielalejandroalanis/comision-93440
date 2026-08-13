import ProductCard from "../ProductCard/ProductCard";
import withProducts from "../../hocs/withProducts";
import styles from "./Products.module.css";

// El componente se exporta envuelto por el HOC que obtiene los productos.
// eslint-disable-next-line react-refresh/only-export-components
const Products = ({ products, isError, isLoading }) => {
  if (isLoading)
    return <div className={styles.message}>Cargando productos...</div>;
  if (isError)
    return (
      <div className={styles.error}>
        No pudimos cargar los productos. Intentá nuevamente.
      </div>
    );
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default withProducts(Products);
