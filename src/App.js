import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Expenses as DUMMY_EXPENSES } from "./DummyData";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdd={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
