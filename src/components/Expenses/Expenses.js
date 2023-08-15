import React, {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandlerYear = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear;
    });



    return(
        <Card className="expenses">
            <ExpensesFilter year={filteredYear} onFilterYear={filterChangeHandlerYear}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;