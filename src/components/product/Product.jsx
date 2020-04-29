import React from 'react'
import './product.css';
import Carousal from '../carousal/Carousal';

const style = {
  product: {
    border: "1px solid #ccc",
    padding: "1rem",
    textAlign: "left",
    borderRadius: ".25rem",
    boxShadow: "2px 2px 5px #ccc",
    margin: "0 4px"
  }
}

function Product({product}) {
  const {name, price, images} = product;

  return (
    <div className="product" style={style.product}>
      <div className="name"><b>{name}</b></div>
      <div className="price">INR {price}</div>
      <Carousal images={images} />
    </div>
  )
}

export default Product
