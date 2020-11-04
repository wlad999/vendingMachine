import React from "react";
import "./index.css";
import { coin } from "../../../services/data";
import shortid from "shortid";

const Pocket = ({ arrCoin, setTransaction }) => {
  let pocketMoney = arrCoin.map((el) => {
    let payMoney = () => {
      setTransaction(el);
    };
    return (
      <img
        className="coin"
        src={coin[el]}
        alt={el}
        onClick={payMoney}
        key={shortid.generate()}
      />
    );
  });
  return <div className="pocket">{pocketMoney}</div>;
};

export default Pocket;
