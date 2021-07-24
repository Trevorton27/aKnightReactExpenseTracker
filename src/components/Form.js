import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label>
          Enter the location of expense:
          <input
            type="text"
            name="expenseLocation"
            onChange={props.onChange}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Enter a description of expense:
          <input
            type="text"
            name="expenseDescription"
            onChange={props.onChange}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Enter the cost of expense:
          <input
            type="number"
            step="0.01"
            name="expenseCost"
            onChange={props.onChange}
          ></input>
        </label>
      </div>
      <div>
        <label>
          Enter the date of purchase:
          <input
            type="date"
            name="expenseDate"
            // onChange={props.handleInputChange}
          ></input>
        </label>
      </div>
      <button type="submit">Submit Expense</button>
    </form>
  );
}

export default Form;
