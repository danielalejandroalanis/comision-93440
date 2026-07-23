import withProducts from "../../hocs/withProducts";

// DRY 
const Products = ({products, isError}) => {
 
  return isError ? (
    <div>Hubo un error al intentar traer los productos</div>
  ) : (
    <>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.title}</li>
          </ul>
        );
      })}
    </>
  );
};

const ProductsContainer = withProducts(Products)

export default ProductsContainer;
