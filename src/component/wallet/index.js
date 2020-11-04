import React from "react";
import "./index.css";
import Change from "./change";
import Pocket from "./pocket";

const Wallet = ({ finance, setTransaction }) => {
  let { wallet: arrCoin, change } = finance;
  return (
    <div className="wallet">
      <Pocket arrCoin={arrCoin} setTransaction={setTransaction} />
      <Change change={change} />
    </div>
  );
};

export default Wallet;
