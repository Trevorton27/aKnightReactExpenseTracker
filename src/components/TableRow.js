import React from 'react';
import Button from 'react-bootstrap/Button';

const TableRow = ({ state, reformatDate, handleRemove }) => {
  return state.expenseTable.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.location}</td>
      <td>{expense.description}</td>
      <td>${expense.cost}</td>
      <td>{reformatDate(expense.date)}</td>
      <td>
        <Button
          variant='danger'
          type='button'
          onClick={() => handleRemove(expense.id)}
        >
          remove
        </Button>
      </td>
    </tr>
  ));
};

export default TableRow;
