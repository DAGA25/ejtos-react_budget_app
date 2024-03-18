
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const val = parseFloat(event.target.value);
        const totalExpenses = expenses.reduce((total,item)=>
        {
            return (total = total+item.cost)
        },0)
        if (val < totalExpenses)
        {
            console.log(val);
            console.log(totalExpenses);
            alert("You cannot reduce the budget value lower than the spending");
            return
        }

        if(val > 20000)
        {
            alert("Budget exceeded 20,000")
            return
        }
  
        setNewBudget(event.target.value);
        dispatch({
            type:'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;