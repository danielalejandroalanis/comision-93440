import { useState, useEffect } from "react";
// useState
// const  [VALOR_DE_MI_ESTADO, FUNCION_PARA_ACTUALIZAR_MIESTADO] = useState(VALOR_DE_MI_ESTADO)

const Contador = () => {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  //useEffect no controlado, sin dependencias -- NO RECOMENDADO
  // useEffect(() => {
  //   console.log("useEffect se ejecuta")
  // });

  //useEffect controlado, con dependencias vacias
  // useEffect(() => {
  //   console.log("useEffect se ejecuta");
  // }, []);

  //useEffect controlado, con dependencias
  useEffect(() => {
    console.log("useEffect se ejecuta");
  }, [counter, counterTwo]);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleIncrementTwo = () => {
    setCounterTwo((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ color: "green" }}>{counter}</span>
      <div style={{ display: "flex" }}>
        <button style={{ width: 100, height: 25 }} onClick={handleIncrement}>
          Incrementar
        </button>
        <button style={{ width: 100, height: 25 }} onClick={handleDecrement}>
          Decrementar
        </button>

        <hr />
        <span style={{ color: "green" }}>{counterTwo}</span>
        <div style={{ display: "flex" }}>
          <button
            style={{ width: 100, height: 25 }}
            onClick={handleIncrementTwo}
          >
            Incrementar Two
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
