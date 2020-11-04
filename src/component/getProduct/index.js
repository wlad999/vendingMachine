import React from "react";
import { products } from "../../services/data";

const GetProduct = ({ pickUpProduct }) => {
  return (
    pickUpProduct && (
      <img
        className="img"
        src={products[pickUpProduct.name]}
        alt={pickUpProduct.name}
      />
    )
  );
};

export default GetProduct;
