import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./Layout.module.css";

const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <footer className={styles.footer}>
      <strong>NovaShop</strong>
      <span>Productos para disfrutar todos los días.</span>
    </footer>
  </div>
);
export default Layout;
