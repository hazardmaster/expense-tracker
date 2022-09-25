import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const { title, amount, date } = formData;

  const onchangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    // this function is received via props from NewExpense.js
    props.onSaveExpenseData(expenseData);
    setFormData({
      title: '',
      amount: '',
      date: '',
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.onCancel();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={onchangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='amount'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={onchangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            name='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={onchangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={(e) => handleCancel(e)}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
