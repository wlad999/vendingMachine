import React, { useEffect, useState } from "react";
import "./index.css";
import Display from "../display/index";
import Controller from "../controller";
import Slots from "../slots";
import GetProduct from "../getProduct";

const data = [
  { id: 11, name: "snickers", quantity: 3, cost: 220 },
  { id: 12, name: null, quantity: null },
  { id: 13, name: "bomba", quantity: 3, cost: 315 },
  { id: 14, name: null, quantity: null },
  { id: 15, name: null, quantity: null },
  { id: 21, name: null, quantity: null },
  { id: 22, name: "mars", quantity: 3, cost: 190 },
  { id: 23, name: "snickers", quantity: 3, cost: 220 },
  { id: 24, name: null, quantity: null },
  { id: 25, name: null, quantity: null },
  { id: 31, name: null, quantity: null },
  { id: 32, name: null, quantity: null },
  { id: 33, name: "bomba", quantity: 3, cost: 315 },
  { id: 34, name: "snickers", quantity: 3, cost: 220 },
  { id: 35, name: null, quantity: null },
  { id: 41, name: null, quantity: null },
  { id: 42, name: "mars", quantity: 3, cost: 190 },
  { id: 43, name: null, quantity: null },
  { id: 44, name: null, quantity: null },
  { id: 45, name: null, quantity: null },
  { id: 51, name: null, quantity: null },
  { id: 52, name: null, quantity: null },
  { id: 53, name: "mars", quantity: 3, cost: 190 },
  { id: 54, name: null, quantity: null },
  { id: 55, name: null, quantity: null },
];

const Machine = ({ finance, setTransaction, onChangeDisplay }) => {
  const { display } = finance;

  const [product, setProduct] = useState(data);

  const [pickUpProduct, setPickUpProduct] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => setPickUpProduct(null), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [product]);

  const getProduct = (num) => {
    let productCost = 0;
    let pickUpPtoduct;
    const updateProduct = product.map((el) => {
      if (el.id === Number(num)) {
        let updateQuanyity = el.quantity - 1;
        productCost = el.cost;
        pickUpPtoduct = el;
        return { ...el, quantity: updateQuanyity };
      }
      return el;
    });

    if (display >= productCost) {
      setProduct(updateProduct);
      onChangeDisplay(productCost);
      setPickUpProduct(pickUpPtoduct);
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
