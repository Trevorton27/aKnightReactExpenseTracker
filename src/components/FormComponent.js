import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormComponent(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Enter the location of expense:</Form.Label>
        <Form.Control
          type="text"
          name="expenseLocation"
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter a description of expense:</Form.Label>
        <Form.Control
          type="text"
          name="expenseDescription"
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the cost of expense:</Form.Label>
        <Form.Control
          type="number"
          step="0.01"
          name="expenseCost"
          onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the date of purchase:</Form.Label>
        <Form.Control
          type="date"
          name="expenseDate"
          onChange={props.onChange}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit Expense
      </Button>
    </Form>
  );
}

export default FormComponent;
