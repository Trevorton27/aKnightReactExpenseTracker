import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseLocation: '',
      expenseTag: [],
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
      }
    });
    console.log(name);
    console.log(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.expenseLocation;

    this.setState((previousState) => {
      const newState = { ...previousState };
      newState.expenseTag.push(value);
      return newState;
    });
  }

  // What do I want to do? When I enter information in the input field, I want to display the result of what I entered in a paragraph tag
  render() {
    // needs a key, can be specified in a custom component
    const expenseTags = this.state.expenseTag.map((text) => {
      return <p>{text}</p>;
    });

    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        {expenseTags}
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
