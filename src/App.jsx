import "./App.css";
// Props: strings, numbers, booleans, functions, objects, arrays
// Components
import Header from "./components/Header/Header";
import Contador from "./components/Contador/Contador";
import Layout from "./layouts/Layout";
import PracticePromises from "./components/PracticePromises/PracticePromises";

const userName = "Pedrito";

const App = () => {
  return (
    <Layout>
      {/* <div className="container"> */}
      {/* <Header
          title="Clase 02 de React en CoderHouse!"
          subtitle="Hoy vemos useState y componentes de React!"
          onClick={() => console.log("Funcion")}
        /> */}
      {/* <Contador /> */}
      {/* <h1 style={{ color: "orange" }}>Titulo!</h1> */}
      {/* <p className="mainText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          harum fugit eum alias illum cum tenetur eius! Minima, eligendi! Enim
          porro eveniet eligendi error vel non! Non sapiente deserunt libero.
        </p>
        <p>User Name: {userName.toUpperCase()}</p>
        <p>Total: {8 + 22}</p>
        <Header
          title={"Soy un titulo desde una prop de React!"}
          subtitle={"Clase 02 de React!"}
        />
        <Header
          title={"Manana ganamos con Argentina!"}
          subtitle={"Con dos goles de Messi!"}
        /> */}
      {/* </div> */}
      <PracticePromises />
    </Layout>
  );
};

export default App;
