import { Link } from "react-router-dom";
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "80px 20px" }}>
    <h1>404</h1>
    <p>La página que buscás no existe.</p>
    <Link to="/">Volver al inicio</Link>
  </div>
);
export default NotFound;
