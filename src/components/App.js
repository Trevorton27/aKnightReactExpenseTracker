import React from 'react';
import Form from './Form';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    // unique key identifier
    this.uniqueIdentifier = 1;
    let date = new Date();
    date.setDate(date.getDate());
    let currentDate = date.toISOString().substr(0, 10);

    this.state = {
      expenseLocation: '',
      expenseDescription: '',
      expenseCost: 0,
      expenseDate: currentDate,
      expenseTable: [],
    };

    // I forgot to add bind here....
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((previousState) => {
      if (name === 'expenseLocation') {
        return {
          ...previousState,
          expenseLocation: value,
        };
      } else if (name === 'expenseDescription') {
        return {
          ...previousState,
          expenseDescription: value,
        };
      } else if (name === 'expenseCost') {
        return {
          ...previousState,
          expenseCost: value,
        };
      } else if (name === 'expenseDate') {
        return {
          ...previousState,
          expenseDate: value,
        };
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.uniqueIdentifier++;

    const { expenseLocation, expenseDescription, expenseCost, expenseDate } =
      this.state;
    this.setState((previousState) => {
      const modifiedState = { ...previousState };
      modifiedState.expenseTable.push({
        id: this.uniqueIdentifier,
        location: expenseLocation,
        description: expenseDescription,
        cost: expenseCost,
        date: expenseDate,
      });
      return modifiedState;
    });
  }

  renderTableData() {
    const renderExpenseRows = this.state.expenseTable.map((expenseRow) => {
      const { id, location, description, cost, date } = expenseRow;
      return (
        <tr key={id}>
          <td>{location}</td>
          <td>{description}</td>
          <td>${cost}</td>
          <td>{date}</td>
        </tr>
      );
    });
    return renderExpenseRows;
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Table renderTableData={this.renderTableData()} />
      </div>
    );
  }
}

export default App;

/* <table>
          <thead>
            <tr>
              <th colSpan="4">Sample Table</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table> */
