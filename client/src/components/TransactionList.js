import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionItem from "./TransactionItem";
import { getTransactions } from "../Actions/transactionActions";

const TransactionList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  const transactions = useSelector((state) => state.transactions.transactions);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
