import { ADD_TXN, DELETE_TXN } from "../Actions/types";

const initialState = {
  transactions: [
    { id: 1, text: "milk", amount: -20 },
    { id: 2, text: "curd", amount: -30 },
    { id: 3, text: "pepsi", amount: -40 },
    { id: 4, text: "salary", amount: 200 },
  ],
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TXN:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TXN:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
