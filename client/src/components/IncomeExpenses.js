import React from "react";
import { useSelector } from "react-redux";

const IncomeExpenses = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const incomes = transactions.map(
    (transaction) => transaction.amount > 0 && transaction.amount
  );

  const incomesTotal = incomes
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expenses = transactions.map(
    (transaction) => transaction.amount < 0 && transaction.amount
  );
  const expensesTotal = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{incomesTotal}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{Math.abs(expensesTotal)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
