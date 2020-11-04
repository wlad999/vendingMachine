import React, { useEffect, useState } from "react";
import "./index.css";
import { coin, availableChange } from "../../services/data";
import shortid from "shortid";

const Wallet = ({ finance, setTransaction }) => {
  let { wallet: arrCoin, change } = finance;

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

  let letGetChange = changeCoin.map((el) => {
    return (
      <img className="coin" src={coin[el]} alt={el} key={shortid.generate()} />
    );
  });

  return (
    <div className="wallet">
      <div className="pocket">{pocketMoney}</div>
      <div className="change">{letGetChange}</div>
    </div>
  );
};

export default Wallet;
