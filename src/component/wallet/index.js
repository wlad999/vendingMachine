import React from "react";
import "./index.css";
import { coin } from "../../services/data";

const shortid = require("shortid");
shortid.generate();

const Wallet = ({ finance, setTransaction }) => {
  let { wallet: arrCoin, change } = finance;

  let box = arrCoin.map((el) => {
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

  const availableChange = [200, 100, 50, 20, 10, 5];
  const changeCoin = [];
  let rest = change;
  let i = 0;
  do {
    let calculate = rest / availableChange[i];
    if (calculate >= 1) {
      changeCoin.push(availableChange[i]);
      rest = rest - availableChange[i];
    } else {
      i++;
    }
  } while (rest > 0);

  let letGetChange = changeCoin.map((el) => {
    return (
      <img className="coin" src={coin[el]} alt={el} key={shortid.generate()} />
    );
  });

  return (
    <div className="wallet">
      <div className="pocket">{box}</div>
      <div className="change">{letGetChange}</div>
    </div>
  );
};

export default Wallet;
