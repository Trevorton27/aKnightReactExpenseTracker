import React from 'react';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseLocation: '',
      expenseDescription: '',
      expenseCost: 0,
      expenseDate: '',
      expenseTable: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const expenseLocalStorage =
      JSON.parse(localStorage.getItem('expenseLocalStorage')) || [];
    this.setState({
      expenseTable: expenseLocalStorage
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenseTable !== prevState.expenseTable.length) {
      localStorage.setItem(
        'expenseLocalStorage',
        JSON.stringify(this.state.expenseTable)
      );
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log('name: ', name, 'value: ', value);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { expenseLocation, expenseDescription, expenseCost, expenseDate } =
      this.state;
    const expenseItem = {
      id: Date.now(),
      location: expenseLocation,
      description: expenseDescription,
      cost: expenseCost,
      date: expenseDate
    };

    this.setState({
      expenseTable: [...this.state.expenseTable, expenseItem],
      expenseLocation: '',
      expenseDescription: '',
      expenseCost: 0,
      expenseDate: ''
    });
  }

  handleRemove(id) {
    const removeRow = this.state.expenseTable.filter(
      (expense) => expense.id !== id
    );
    this.setState({
      expenseTable: removeRow
    });
  }

  reformatDate(date) {
    const dateArray = date.split('-');
    let dateDay = parseInt(dateArray[2], 10);
    const dateMonth = parseInt(dateArray[1], 10);
    const dateYear = dateArray[0];

    const reformattedDate = `${dateMonth}.${dateDay}.${dateYear}`;
    return reformattedDate;
  }

  render() {
    return (
      <Container>
        <h1>Expense Tracker React</h1>

        <FormComponent
          state={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <TableComponent
          state={this.state}
          reformatDate={this.reformatDate}
          handleRemove={this.handleRemove}
        />
      </Container>
    );
  }
}

export default App;
