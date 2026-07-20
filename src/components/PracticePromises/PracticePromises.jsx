import { useEffect, useState } from "react";

async function getProducts() {
  const productsArray = [
    {
      id: 1,
      name: "Zapatilla adidas",
      description: "Zapatilla adidas talle 43",
    },
    {
      id: 2,
      name: "Zapatilla Nike",
      description: "Zapatilla Nike talle 43",
    },
    {
      id: 3,
      name: "Iphone 17",
      description: "Iphone 17 con muchas cosas",
    },
  ];
  return new Promise((resolve, reject) => {
    resolve(
      setTimeout(() => {
        return productsArray;
      }, 3000),
    );
  });
}

const PracticePromises = () => {
  const [products, setProducts] = useState([]);

  const flag = true;
  const promise = new Promise((resolve, reject) => {
    if (flag) {
      resolve();
    } else {
      reject();
    }
  });

  promise
    .then(() => {
      console.log(`La promesa se cumple y el valor de flag es: ${flag}`);
    })
    .catch(() => {
      console.log(
        `La promesa se cumple negativamente y el valor de flag es: ${flag}`,
      );
    });

  return (
    <div>
      {products.map((value) => {
        return (
          <div>
            nombre: {value.name}
            descripcion: {value.description}
          </div>
        );
      })}
    </div>
  );
};

export default PracticePromises;
