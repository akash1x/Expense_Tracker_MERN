import React from "react";
import { useSelector } from "react-redux";
const Balance = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  console.log(transactions);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>Rs {total}</h1>
    </>
  );
};

export default Balance;
