import React, {useState, useEffect} from 'react'
import Product from '../product/Product';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
    return () => {
      console.log('Unmounting.')
    }
  }, []);

  function fetchProducts() {
    let url = "/mobile-zone/data/products.json";
    fetch(url, {})
    .then(res => res.json())
    .then(response => {
      console.log(response);
      if (response) {
        setProducts(response);
      }
    });
  }
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-container">
        {
          products.length ?
          products.map((product, index) => (
            <Product key={index} product={product} />
          )) : <></>
        }
      </div>
    </div>
  )
}

export default Products
