import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const FormComponent = ({ state, onChange, onSubmit }) => {
  const { expenseCost, expenseDate, expenseDescription, expenseLocation } =
    state;
  return (
    <Form onSubmit={onSubmit}>
      <Row md={3}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter the location of expense:</Form.Label>
          <Form.Control
            type='text'
            name='expenseLocation'
            value={expenseLocation}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <Row md={3}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter a description of expense:</Form.Label>
          <Form.Control
            type='text'
            name='expenseDescription'
            value={expenseDescription}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <Row md={5}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter the cost of expense:</Form.Label>
          <Form.Control
            type='number'
            step='0.01'
            name='expenseCost'
            value={expenseCost}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <Row md={5}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter the date of purchase:</Form.Label>
          <Form.Control
            type='date'
            name='expenseDate'
            value={expenseDate}
            onChange={onChange}
          />
        </Form.Group>
      </Row>
      <Button variant='success' type='submit' className='mb-3'>
        Submit Expense
      </Button>
    </Form>
  );
};

export default FormComponent;
