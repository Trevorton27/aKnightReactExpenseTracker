import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="expenseLocation">
          Enter the location of expense:
          <input
            id="expenseLocation"
            type="text"
            value={props.value}
            onChange={props.handleChange}
          ></input>
        </label>
      </div>
      <div>
        <label htmlFor="expenseDescription">
          Enter a description of expense:
          <input
            id="expenseDescription"
            type="text"
            value={props.value}
            onChange={props.handleChange}
          ></input>
        </label>
      </div>
      <div>
        <label htmlFor="expenseCost">
          Enter the cost of expense:
          <input
            id="expenseCost"
            type="number"
            step="0.01"
            value={props.value}
            onChange={props.handleChange}
          ></input>
        </label>
      </div>
      <div>
        k
        <label htmlFor="expenseDate">
          Enter the date of purchase:
          <input
            id="expenseDate"
            type="date"
            value={props.value}
            onChange={props.handleChange}
          ></input>
        </label>
      </div>
      <button type="submit">Submit Expense</button>
    </form>
  );
}

export default Form;
