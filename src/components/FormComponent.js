import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class FormComponent extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Row md={3}>
          <Form.Group className="mb-3">
            <Form.Label>Enter the location of expense:</Form.Label>
            <Form.Control
              type="text"
              name="expenseLocation"
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Row>
        <Row md={3}>
          <Form.Group className="mb-3">
            <Form.Label>Enter a description of expense:</Form.Label>
            <Form.Control
              type="text"
              name="expenseDescription"
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Row>
        <Row md={5}>
          <Form.Group className="mb-3">
            <Form.Label>Enter the cost of expense:</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              name="expenseCost"
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Row>
        <Row md={5}>
          <Form.Group className="mb-3">
            <Form.Label>Enter the date of purchase:</Form.Label>
            <Form.Control
              type="date"
              name="expenseDate"
              onChange={this.props.onChange}
            />
          </Form.Group>
        </Row>
        <Button variant="success" type="submit" className="mb-3">
          Submit Expense
        </Button>
      </Form>
    );
  }
}

export default FormComponent;
