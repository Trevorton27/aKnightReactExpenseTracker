import React from 'react';
import Table from 'react-bootstrap/Table';

class TableComponent extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="5">Expense Tracker Table</th>
          </tr>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{this.props.renderTableData}</tbody>
      </Table>
    );
  }
}

export default TableComponent;
