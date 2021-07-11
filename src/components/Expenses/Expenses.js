import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const onFilterYearSelect = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
    // console.log(filterYear);
    console.log(selectedFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYearSelect={onFilterYearSelect}
      />
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
