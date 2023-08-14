import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(newExpense);
    }
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
}

export default NewExpense;