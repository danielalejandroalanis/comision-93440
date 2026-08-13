import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <article className={styles.card}>
      <Link to={`/productos/${product.id}`} className={styles.imageLink}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <Link to={`/productos/${product.id}`} className={styles.title}>
          {product.title}
        </Link>
        <div className={styles.rating}>
          ★ {product.rating?.toFixed(1)}{" "}
          <span>({product.stock} disponibles)</span>
        </div>
        <p className={styles.price}>US$ {product.price.toFixed(2)}</p>
        <p className={styles.shipping}>Envío gratis</p>
        <button type="button" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};
export default ProductCard;
