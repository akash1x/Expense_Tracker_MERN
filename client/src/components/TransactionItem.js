import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../Actions/transactionActions";

const TransactionItem = ({ transaction }) => {
  const dispatch = useDispatch();

  const performDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={sign === "+" ? "plus" : "minus"}>
        {transaction.name}{" "}
        <span>
          {sign} Rs{Math.abs(transaction.amount)}{" "}
        </span>
        <button
          className="delete-btn"
          onClick={() => performDeleteTransaction(transaction._id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default TransactionItem;
