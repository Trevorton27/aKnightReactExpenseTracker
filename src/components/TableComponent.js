import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

const TableComponent = ({ state, reformatDate, handleRemove }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan='5'>Expense Tracker Table</th>
        </tr>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Cost</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          state={state}
          reformatDate={reformatDate}
          handleRemove={handleRemove}
        />
      </tbody>
    </Table>
  );
};

export default TableComponent;
