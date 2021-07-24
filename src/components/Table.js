import React from 'react';

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">Expense Tracker Table</th>
        </tr>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{/* Will I insert the generated rows here? */}</tbody>
      <tfoot>{/* Insert total cost here? */}</tfoot>
    </table>
  );
}

export default Table;

// function Table(props) {
//   const row = props.expenseDescription.map((expense) => {
//     return <td>{expense}</td>;
//   });
//   return (
//     <div>
//       <tr>{row}</tr>
//     </div>
//   );
// }
