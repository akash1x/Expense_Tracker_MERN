import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../Actions/transactionActions";

const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random(),
      text: text,
      amount: +amount,
    };

    dispatch(addTransaction(newTransaction));
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => addItem(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTranscation;
