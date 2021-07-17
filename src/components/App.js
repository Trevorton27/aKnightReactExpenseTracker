import React, { useState } from 'react';
import Form from './Form';

function App() {
  // current date
  const date = new Date();
  date.setDate(date.getDate());
  const currentDate = date.toISOString().substr(0, 10);

  const [expenseLocation, setExpenseLocation] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseCost, setExpenseCost] = useState(0);
  const [expenseDate, setExpenseDate] = useState(currentDate);

  function handleSubmit() {}

  function handleChange(event) {}

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
