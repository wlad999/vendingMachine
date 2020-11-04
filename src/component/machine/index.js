import React, { useEffect, useState } from "react";
import "./index.css";
import Display from "../display/index";
import Controller from "../controller";
import Slots from "../slots";
import GetProduct from "../getProduct";
import { productsArr } from "../../services/data";

const Machine = ({ finance, setTransaction, onChangeDisplay }) => {
  const { display } = finance;

  const [product, setProduct] = useState(productsArr);

  const [pickUpProduct, setPickUpProduct] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => setPickUpProduct(null), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [product]);

  const getProduct = (num) => {
    let productCost = 0;
    let pickUpProduct;
    const updateProduct = product.map((el) => {
      if (el.id === Number(num)) {
        let updateQuanyity = el.quantity - 1;
        productCost = el.cost;
        pickUpProduct = el;
        return { ...el, quantity: updateQuanyity };
      }
      return el;
    });

    if (display >= productCost) {
      setProduct(updateProduct);
      onChangeDisplay(productCost);
      setPickUpProduct(pickUpProduct);
    }
  };

  return (
    <div className="machine">
      <div className="slotsContainer">
        <Slots slots={product} display={display} />
      </div>
      <div className="machine-display">
        <Display display={display} />
        <button
          className="cancel"
          onClick={() => setTransaction("cancel")}
        ></button>
        <Controller getProduct={getProduct} />
      </div>
      <div className="getProduct">
        <GetProduct pickUpProduct={pickUpProduct} />
      </div>
    </div>
  );
};

export default Machine;
