import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header
        title="Clase 02 de React en CoderHouse!"
        subtitle="Hoy vemos useState y componentes de React!"
        onClick={() => console.log("Funcion")}
      />
      <div>{children}</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Layout;
