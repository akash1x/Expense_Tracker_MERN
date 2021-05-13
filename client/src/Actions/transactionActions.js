import { ADD_TXN, DELETE_TXN } from "./types";

//Delete Transaction
export const deleteTransaction = (id) => {
  return {
    type: DELETE_TXN,
    payload: id,
  };
};

//Add Transaction
export const addTransaction = (newTransaction) => {
  return {
    type: ADD_TXN,
    payload: newTransaction,
  };
};
