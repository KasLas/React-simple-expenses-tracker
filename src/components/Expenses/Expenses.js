import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expenseItem) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
