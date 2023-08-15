import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const[isShown, setIsShown] = useState(false);
    const saveExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(newExpense);
    }
    const formToggleHandler = () => {
        setIsShown(true);
    }
    const hideFormHandler = () => {
        setIsShown(false);
    }
    let formContent = <button onClick={formToggleHandler}>Add new Expense</button>;
    if (isShown){
        formContent = (
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler}/>
        )
    }
    return (
      <div className="new-expense">
          {formContent}
      </div>
    );
}

export default NewExpense;