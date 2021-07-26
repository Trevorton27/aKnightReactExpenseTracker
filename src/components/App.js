import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    // unique key identifier
    let uniqueIdentifier = 1;
    // setting the current date for expenseDate
    let date = new Date();
    date.setDate(date.getDate());
    let currentDate = date.toISOString().substr(0, 10);

    this.state = {
      expenseLocation: '',
      expenseDescription: '',
      expenseCost: 0,
      expenseDate: currentDate,
      storeExpenses: [
        { key: 1, location: [] },
        { key: 2, description: [] },
        { key: 3, cost: [] },
        { key: 4, date: [] },
      ],
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
    // console.log(name);
    // console.log(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    // code below will probably need refactoring
    const currentState = this.state;

    this.setState((previousState) => {
      const updateState = { ...previousState };
      updateState.storeExpenses[0].location.push(currentState.expenseLocation);
      updateState.storeExpenses[1].description.push(
        currentState.expenseDescription
      );
      updateState.storeExpenses[2].cost.push(currentState.expenseCost);
      updateState.storeExpenses[3].date.push(currentState.expenseDate);
      console.log(updateState);
      return updateState;
    });
  }

  insertExpenseRows(index) {
    const storeExpensesObject = this.state.storeExpenses;
    return (
      <tr>
        <td>{storeExpensesObject[0].location[index]}</td>
        <td>{storeExpensesObject[1].description[index]}</td>
        <td>{storeExpensesObject[2].cost[index]}</td>
        <td>{storeExpensesObject[3].date[index]}</td>
      </tr>
    );
  }

  generateExpenseRows() {
    const storeExpensesObject = this.state.storeExpenses;
    const arrayLength = storeExpensesObject[0].location.length;

    for (let i = 0; i < arrayLength; i++) {
      this.insertExpenseRows(i);
    }
  }

  // What do I want to do? When I enter information in the input field, I want to display the result of what I entered in a paragraph tag
  render() {
    // const expenseTags = this.state.storeExpenses.map((text) => {
    //   return <p>{text}</p>;
    // });

    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        {/* {expenseTags} */}
        <table>
          <thead>
            <tr>
              <th>Sample Table</th>
            </tr>
          </thead>
          <tbody>{this.generateExpenseRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;

// function App() {
//   // current date
//   // const date = new Date();
//   // date.setDate(date.getDate());
//   // const currentDate = date.toISOString().substr(0, 10);

//   const [expenseDescription, setExpenseDescription] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     const newExpenseDescription = [...expenseDescription, inputValue];
//     setExpenseDescription(newExpenseDescription);
//     console.log(newExpenseDescription);
//   }

//   function handleChange(event) {
//     console.log(event.target.value);
//     setInputValue(event.target.value);
//   }
