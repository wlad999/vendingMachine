import React, { useEffect, useState } from "react";
import "./index.css";
import { coin, availableChange } from "../../../services/data";
import shortid from "shortid";

const Change = ({ change }) => {
  const [changeCoin, setChangeCoin] = useState([]);

  useEffect(() => {
    let changeArr = [];
    let rest = change;
    let i = 0;
    do {
      let calculate = rest / availableChange[i];
      if (calculate >= 1) {
        changeArr.push(availableChange[i]);
        rest = rest - availableChange[i];
      } else {
        i++;
      }
    } while (rest > 0);
    setChangeCoin(changeArr);
  }, [change]);

  let letGetChange = changeCoin.map((el) => {
    return (
      <img className="coin" src={coin[el]} alt={el} key={shortid.generate()} />
    );
  });

  return <div className="change">{letGetChange}</div>;
};

export default Change;
