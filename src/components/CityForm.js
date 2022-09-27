import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class CityForm extends React.Component {
  render() {
    return (
      <>
        <Container className="mw-75">
          <Form onSubmit={this.props.handleSearch} className="my-3">
            <Form.Group className="mb-3">
              <Form.Control onChange={this.props.handleInput} type="text" placeholder="Enter a city name to see its location on a map:" />
            <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button onClick={this.props.handleSearch} variant="outline-dark" type="submit">Explore!</Button>
            </div>
          </Form>
        </Container>
      </>
    )
  }
}

export default CityForm;