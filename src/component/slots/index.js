import React from "react";
import "./index.css";
import shortid from "shortid";
import { products } from "../../services/data";

const Slots = ({ slots }) => {
  let box = slots.map((el) => {
    let images = [];
    let left = 3;
    let top = -5;
    if (el.name === "bomba") {
      left = 13;
    }

    for (let i = 1; i <= el.quantity; i++) {
      images.push(
        <img
          className="img"
          src={products[el.name]}
          alt={el.name}
          style={{ left: `${left}px`, top: `${top}px` }}
          key={shortid.generate()}
        />
      );

      left = left + 2;
      top = top + 3;
    }

    return (
      <div className="box" key={shortid.generate()}>
        {images}
        <div className="slotNumber">{el.id}</div>
      </div>
    );
  });
  return (
    <div className="slots" key={shortid.generate()}>
      {box}
    </div>
  );
};

export default Slots;
