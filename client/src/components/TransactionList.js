import React from "react";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
