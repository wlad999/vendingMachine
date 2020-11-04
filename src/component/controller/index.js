import React, { useEffect, useState } from "react";
import "./index.css";
import shortid from "shortid";
import { buttonsArr } from "../../services/data";

const Controller = ({ getProduct }) => {
  const [position, setPositons] = useState("");
  useEffect(() => {
    console.log("POSITION", position);
  }, [position]);

  const controllerHandler = (button) => {
    if (
      position.length < 2 &&
      button <= 5 &&
      button !== "C" &&
      button !== 0 &&
      button !== "OK"
    ) {
      setPositons((position) => position + button);
    } else if (button === "C") {
      setPositons("");
    } else if (position.length === 2 && button === "OK") {
      getProduct(position);
      console.log("OK", position);
    }
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
