import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent(props) {
  return (
    <Table striped bordered hover>
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
      <tbody>{props.renderTableData}</tbody>
    </Table>
  );
}

export default TableComponent;
