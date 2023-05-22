import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
function Expenses(props) {
  /*const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState("");

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };s
 };*/

  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {ExpensesFilter}
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
