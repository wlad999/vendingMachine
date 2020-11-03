import React, { useState } from "react";
import "./App.css";
import Machine from "./component/machine";
import Wallet from "./component/wallet";

function App() {
  let finance = {
    display: 0,
    wallet: [200, 100, 50],
    change: 0,
  };

  const [transactions, setTransaction] = useState(finance);

  const onChangeDisplay = async (productCost) => {
    let change = transactions.display - productCost;
    await setTransaction((transactions) => ({
      ...transactions,
      display: 0,
      change,
    }));
  };

  const onPayHandler = async (coin) => {
    if (coin === "cancel" && transactions.change === 0) {
      await setTransaction((transactions) => ({
        ...transactions,
        wallet: [200, 100, 50],
        display: 0,
      }));
      return;
    }
    if (coin !== "cancel") {
      const wallet = transactions.wallet.filter((el) => el !== coin);
      const display = transactions.display + coin;
      await setTransaction((transactions) => ({
        ...transactions,
        wallet,
        display,
      }));
    }

    if (coin === "cancel" && transactions.display) {
      const wallet = [transactions.display];
      const display = 0;
      await setTransaction((transactions) => ({
        ...transactions,
        wallet,
        display,
      }));
    }
  };
  return (
    <div className="App">
      <Machine
        finance={transactions}
        setTransaction={onPayHandler}
        onChangeDisplay={onChangeDisplay}
      />
      <Wallet finance={transactions} setTransaction={onPayHandler} />
    </div>
  );
}

export default App;
