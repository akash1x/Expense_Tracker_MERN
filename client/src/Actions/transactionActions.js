import { ADD_TXN, DELETE_TXN, GET_ITEMS } from "./types";
import axios from "axios";

//Delete Transaction
export const deleteTransaction = (id) => (dispatch) => {
  axios.delete(`/api/transactions/${id}`).then((res) =>
    dispatch({
      type: DELETE_TXN,
      payload: id,
    })
  );
};

//GET Transactions
export const getTransactions = () => (dispatch) => {
  axios.get("/api/transactions/").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};

//ADD Transaction
export const addTransaction = (newTxn) => (dispatch) => {
  axios.post("/api/transactions/", newTxn).then((res) => {
    dispatch({
      type: ADD_TXN,
      payload: res.data,
    });
  });
};
