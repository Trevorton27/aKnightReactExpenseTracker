import React from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.uniqueIdentifier = localStorage.getItem('count') || 0;
    const expenseLocalStorage =
      JSON.parse(localStorage.getItem('expenseLocalStorage')) || [];
    this.setState((prevState) => {
      return {
        ...prevState,
        expenseTable: expenseLocalStorage,
      };
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      if (name === 'expenseLocation') {
        return {
          ...prevState,
          expenseLocation: value,
        };
      } else if (name === 'expenseDescription') {
        return {
          ...prevState,
          expenseDescription: value,
        };
      } else if (name === 'expenseCost') {
        return {
          ...prevState,
          expenseCost: value,
        };
      } else if (name === 'expenseDate') {
        return {
          ...prevState,
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
    this.setState(
      (prevState) => {
        const modifiedState = { ...prevState };
        modifiedState.expenseTable.push({
          id: this.uniqueIdentifier,
          location: expenseLocation,
          description: expenseDescription,
          cost: expenseCost,
          date: expenseDate,
        });
        return modifiedState;
      },
      () => {
        localStorage.setItem(
          'expenseLocalStorage',
          JSON.stringify(this.state.expenseTable)
        );
        localStorage.setItem('count', this.uniqueIdentifier);
      }
    );
  }

  handleRemove(id) {
    this.setState(
      (prevState) => {
        const filteredExpenseTable = prevState.expenseTable.filter(
          (expenseObject) => {
            return expenseObject.id !== id;
          }
        );
        const modifiedState = {
          ...prevState,
          expenseTable: filteredExpenseTable,
        };
        return modifiedState;
      },
      () => {
        localStorage.setItem(
          'expenseLocalStorage',
          JSON.stringify(this.state.expenseTable)
        );
      }
    );
  }

  reformatDate(date) {
    const dateArray = date.split('-');
    let dateDay = parseInt(dateArray[2], 10);
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

        <TableComponent renderTableData={this.renderTableData()} />
      </Container>
    );
  }
}

export default App;
