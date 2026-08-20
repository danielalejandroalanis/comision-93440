# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# comision-93440


Modelo de datos de una compra confirmada

{
    clave: valor
}

clave > el nombre que nosotros queremos ponerle
valor > tiene un tipo definido (string, boolean, number (int, float/double))

{
    id: id del producto
    name: nombre del producto
    qtyItem: cantidad del producto
    totalAmount: monto total
    buyer: datos del comprador
    status: el estado de la compra
    createdAt: fecha de creacion
}

Products:
{
    id,
    nombre,
    price,
    raiting
}

Buy:
{
    items: Products[],
    buyer: {
        name: string,
        address: {
            street: string,
            number: int,
            country: string,
            zip: string
        },
        identification: string,
    },
    totalAmount: double,
    status: string,
    createdAt: timestamp
}