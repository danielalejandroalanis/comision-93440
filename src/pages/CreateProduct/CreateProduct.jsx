import { useState } from "react";
import { createProduct } from "../../services/products.service";
import styles from "./CreateProduct.module.css";

const initialForm = {
  title: "",
  description: "",
  price: "",
  category: "",
  brand: "",
  thumbnail: "",
};
const CreateProduct = () => {
  const [form, setForm] = useState(initialForm);
  const [created, setCreated] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target }) =>
    setForm((current) => ({ ...current, [target.name]: target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setCreated(null);
    try {
      const result = await createProduct({
        ...form,
        price: Number(form.price),
      });
      setCreated(result);
      setForm(initialForm);
    } catch {
      setError("No pudimos crear el producto. Intentá nuevamente.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <span>Panel de productos</span>
        <h1>Crear un producto</h1>
        <p>Completá la información para simular el alta en DummyJSON.</p>
        <div>
          <strong>💡 Importante</strong>
          <p>
            DummyJSON devuelve el producto creado, pero no guarda cambios de
            forma permanente.
          </p>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nombre del producto
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Ej. Auriculares inalámbricos"
            required
          />
        </label>
        <div className={styles.row}>
          <label>
            Precio (US$)
            <input
              name="price"
              type="number"
              min="0.01"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              placeholder="99.99"
              required
            />
          </label>
          <label>
            Categoría
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="smartphones"
              required
            />
          </label>
        </div>
        <label>
          Marca
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Nombre de la marca"
            required
          />
        </label>
        <label>
          URL de imagen
          <input
            name="thumbnail"
            type="url"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>
        <label>
          Descripción
          <textarea
            name="description"
            rows="5"
            value={form.description}
            onChange={handleChange}
            placeholder="Contá las características principales..."
            required
          />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button disabled={loading}>
          {loading ? "Creando..." : "Crear producto"}
        </button>
        {created && (
          <div className={styles.success}>
            <strong>✓ Producto creado correctamente</strong>
            <span>
              ID simulado: {created.id} · {created.title}
            </span>
          </div>
        )}
      </form>
    </section>
  );
};
export default CreateProduct;
