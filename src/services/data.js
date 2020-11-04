import twoHundred from "../assets/coin-200.png";
import oneHundred from "../assets/coin-100.png";
import fifty from "../assets/coin-50.png";
import twenty from "../assets/coin-20.png";
import ten from "../assets/coin-10.png";
import five from "../assets/coin-5.png";
import bomba from "../assets/bomba.png";
import mars from "../assets/mars.png";
import snickers from "../assets/snickers.png";

export const finance = {
  display: 0,
  wallet: [200, 100, 50],
  change: 0,
};

export const coin = {
  200: twoHundred,
  100: oneHundred,
  50: fifty,
  20: twenty,
  10: ten,
  5: five,
};

export const availableChange = Object.keys(coin).reverse((el) => Number(el));

export const products = { bomba, mars, snickers };

export const productsArr = [
  { id: 11, name: "snickers", quantity: 3, cost: 220 },
  { id: 12, name: null, quantity: null },
  { id: 13, name: "bomba", quantity: 3, cost: 315 },
  { id: 14, name: null, quantity: null },
  { id: 15, name: null, quantity: null },
  { id: 21, name: null, quantity: null },
  { id: 22, name: "mars", quantity: 3, cost: 190 },
  { id: 23, name: "snickers", quantity: 3, cost: 220 },
  { id: 24, name: null, quantity: null },
  { id: 25, name: null, quantity: null },
  { id: 31, name: null, quantity: null },
  { id: 32, name: null, quantity: null },
  { id: 33, name: "bomba", quantity: 3, cost: 315 },
  { id: 34, name: "snickers", quantity: 3, cost: 220 },
  { id: 35, name: null, quantity: null },
  { id: 41, name: null, quantity: null },
  { id: 42, name: "mars", quantity: 3, cost: 190 },
  { id: 43, name: null, quantity: null },
  { id: 44, name: null, quantity: null },
  { id: 45, name: null, quantity: null },
  { id: 51, name: null, quantity: null },
  { id: 52, name: null, quantity: null },
  { id: 53, name: "mars", quantity: 3, cost: 190 },
  { id: 54, name: null, quantity: null },
  { id: 55, name: null, quantity: null },
];
