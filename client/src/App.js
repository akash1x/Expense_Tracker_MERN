import "./App.css";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscation />
      </div>
    </div>
  );
}

export default App;
