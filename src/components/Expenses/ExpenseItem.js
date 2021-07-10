import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [customTitle, setCustomTitle] = useState(props.title);

  const handleClick = () => {
    setCustomTitle("CustomTitle");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{customTitle}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={handleClick}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
