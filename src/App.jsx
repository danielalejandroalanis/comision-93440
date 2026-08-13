import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="productos/nuevo" element={<CreateProduct />} /> */}
      <Route path="productos/:productId" element={<ProductDetail />} />
      <Route path="carrito" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;
