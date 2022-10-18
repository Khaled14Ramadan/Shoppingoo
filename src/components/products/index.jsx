import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

import './style.css'


const Products = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();

  }, []);

  // console.log(products);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }

  if (!products) {
    return (
      <div className="d-flex justify-content-center align-content-center vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="container pt-4">
      <div className="row g-4">
        {
          products.map((product) => (
            <SingleProduct product={product}/>
          ))
        }

      </div>
    </div>
  )
}

export default Products;