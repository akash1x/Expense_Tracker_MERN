import { ADD_TXN, DELETE_TXN, GET_ITEMS } from "../Actions/types";

const initialState = {
  transactions: [],
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        transactions: action.payload,
      };
    case DELETE_TXN:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
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
