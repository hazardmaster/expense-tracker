import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditing();
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
      {!isEditing && (
        <button onClick={() => startEditing()}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
