import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveInputDataHandler = (submittedInputData) => {
    const expenseData = {
      ...submittedInputData,
      id: Math.random().toString(),
    };

    props.onExpenseAdd(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveInputData={saveInputDataHandler} />
    </div>
  );
};

export default NewExpense;
