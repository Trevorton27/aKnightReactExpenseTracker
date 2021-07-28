import React from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    // unique key identifier
    this.uniqueIdentifier = 0;
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

  handleRemove(id) {
    this.setState((previousState) => {
      const filteredExpenseTable = previousState.expenseTable.filter(
        (expenseObject) => {
          return expenseObject.id !== id;
        }
      );
      const modifiedState = {
        ...previousState,
        expenseTable: filteredExpenseTable,
      };
      return modifiedState;
    });
  }

  reformatDate(date) {
    const dateArray = date.split('-');
    let dateDay = parseInt(dateArray[2], 10); // Removes leading zero if number is less than 10
    const dateMonth = parseInt(dateArray[1], 10);
    const dateYear = dateArray[0];

    const reformattedDate = `${dateMonth}.${dateDay}.${dateYear}`;
    return reformattedDate;
  }

  renderTableData() {
    const renderExpenseRows = this.state.expenseTable.map((expenseObject) => {
      const { id, location, description, cost, date } = expenseObject;
      return (
        <tr key={id}>
          <td>{location}</td>
          <td>{description}</td>
          <td>${cost}</td>
          <td>{this.reformatDate(date)}</td>
          <td>
            <Button
              variant="danger"
              type="button"
              onClick={() => this.handleRemove(id)}
            >
              remove
            </Button>
          </td>
        </tr>
      );
    });
    return renderExpenseRows;
  }

  render() {
    return (
      <Container>
        <h1>Expense Tracker React</h1>

        <FormComponent
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <br />
        <TableComponent renderTableData={this.renderTableData()} />
      </Container>
    );
  }
}

export default App;
