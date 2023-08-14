import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandlerYear = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }
    return(
        <Card className="expenses">
            <ExpensesFilter year={filteredYear} onFilterYear={filterChangeHandlerYear}/>
            {props.items.map((expense) =>(
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                    id={expense.id}
                />
            ))}
        </Card>
    );
}

export default Expenses;