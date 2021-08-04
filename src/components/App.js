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
    // this.localStorageExpenseArray = []; // this is an array of objects each with a unique key for each object
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

  // componentDidMount() {
  //   this.uniqueIdentifier = localStorage.getItem('uniqueIdentifier') || 0;
  //   this.localStorageExpenseArray =
  //     JSON.parse(localStorage.getItem('expenseArray')) || [];
  //   this.setState((prevState) => {
  //     return {
  //       ...prevState,
  //       expenseTable: this.localStorageExpenseArray,
  //     };
  //   });
  // }

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

  // componentDidUpdate(prevProps, prevState) {
  //   // when an expense is added
  //   const previousState = Object.assign({}, prevState);
  //   const currentState = Object.assign({}, this.state);
  //   if (previousState.expenseTable.length < currentState.expenseTable.length) {
  //     localStorage.setItem(
  //       'expenseLocalStorage',
  //       JSON.stringify(currentState.expenseTable)
  //     );
  //   }
  //   console.log(previousState);
  //   console.log(currentState);
  //   // if (previousState[expensTa])
  //   // if ((prevState.expenseTable.length) < (this.state.expenseTable.length)) {
  //   console.log(localStorage);
  //   // }
  // }

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

    // local storage
    // this.localStorageExpenseArray.push({
    //   id: this.uniqueIdentifier,
    //   location: expenseLocation,
    //   description: expenseDescription,
    //   cost: expenseCost,
    //   date: expenseDate,
    // });
    // localStorage.setItem(
    //   `expenseLocalStorage`,
    //   JSON.stringify(this.state.expenseTable) // gets previous version of expense table, lags by 1
    // );
    // console.log(this.localStorageExpenseArray);
    // localStorage.setItem(
    //   'expenseArray',
    //   JSON.stringify(this.localStorageExpenseArray)
    // );
    // localStorage.setItem('uniqueIdentifier', this.uniqueIdentifier);
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

    //Local storage
    // const filteredLocalStorageExpenseArray =
    //   this.localStorageExpenseArray.filter((localStorageExpense) => {
    //     return localStorageExpense.id !== id; // remove the particular object based on the id selected
    //   });
    // // update localStorage with setItem
    // localStorage.setItem(
    //   'expenseArray',
    //   JSON.stringify(filteredLocalStorageExpenseArray)
    // );
    // // localStorage.removeItem(`key${id}`);
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

        <TableComponent renderTableData={this.renderTableData()} />
      </Container>
    );
  }
}

export default App;
