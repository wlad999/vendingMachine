import React from "react";
import bomba from "../../assets/bomba.png";
import mars from "../../assets/mars.png";
import snickers from "../../assets/snickers.png";
const products = { bomba, mars, snickers };

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
