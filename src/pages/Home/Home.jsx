import { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import { getProducts } from "../../services/products.service";
import styles from "./Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setError(null);

      try {
        const productsFromApi = await getProducts();
        setProducts(productsFromApi);
      } catch (requestError) {
        console.error(requestError);
        setError("No pudimos cargar los productos. Intentá nuevamente.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>
            Todo lo que buscás, en un solo lugar
          </span>
          <h1>Encontrá tu próximo favorito.</h1>
          <p>
            Descubrí tecnología, belleza, hogar y mucho más con entrega rápida.
          </p>
          <a href="#productos">Ver productos</a>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <span>ENVÍO</span>
          <strong>GRATIS</strong>
          <small>en productos seleccionados</small>
        </div>
      </section>
      <section id="productos" className={styles.catalog}>
        <div className={styles.heading}>
          <div>
            <span>Nuestra selección</span>
            <h2>Productos destacados</h2>
          </div>
          <p>Elegidos para vos</p>
        </div>
        <Products
          products={products}
          isLoading={isLoading}
          error={error}
        />
      </section>
    </>
  );
};

export default Home;
