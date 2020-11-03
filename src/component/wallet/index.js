import React from "react";
import "./index.css";
import twoHundred from "../../assets/coin-200.png";
import oneHundred from "../../assets/coin-100.png";
import fifty from "../../assets/coin-50.png";
import twenty from "../../assets/coin-20.png";
import ten from "../../assets/coin-10.png";
import five from "../../assets/coin-5.png";

const shortid = require("shortid");
shortid.generate();

const Wallet = ({ finance, setTransaction }) => {
  let { wallet: arrCoin, change } = finance;

  let box = arrCoin.map((el) => {
    let coin = el === 200 ? twoHundred : el === 100 ? oneHundred : fifty;
    let payMoney = () => {
      setTransaction(el);
    };

    return (
      <img
        className="coin"
        src={coin}
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
    let coin =
      el === 200
        ? twoHundred
        : el === 100
        ? oneHundred
        : el === 50
        ? fifty
        : el === 20
        ? twenty
        : el === 10
        ? ten
        : five;
    return (
      <img className="coin" src={coin} alt={el} key={shortid.generate()} />
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
