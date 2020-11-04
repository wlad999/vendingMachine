import React, { useMemo } from "react";
import "./index.css";
import shortid from "shortid";

const Controller = ({ getProduct }) => {
  const buttonsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "OK"];

  let data = useMemo(() => ({ position: "" }), []);

  const controllerHandler = (el) => {
    if (
      data.position.length < 2 &&
      el <= 5 &&
      el !== "C" &&
      el !== 0 &&
      el !== "OK"
    ) {
      data.position = data.position + el;
    } else if (el === "C") {
      data.position = "";
    } else if (data.position.length === 2 && el === "OK") {
      getProduct(data.position);
      console.log("OK", data.position);
    }
    console.log("DATA in controller", data);
  };

  const buttons = buttonsArr.map((el) => (
    <button
      className="controllerButton"
      onClick={() => controllerHandler(el)}
      key={shortid.generate()}
    >
      {el}
    </button>
  ));
  return <div className="controller">{buttons}</div>;
};

export default Controller;
