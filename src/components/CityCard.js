import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

class CityCard extends React.Component {
  render() {
    return (
      <>
        {this.props.error &&
        <Container>
          <Alert variant="danger" className="my-3">
            <Alert.Heading>
              <>
                <h5>Oops! {this.props.errorMessage}. Please try another city.</h5>
              </>
            </Alert.Heading>
          </Alert>
        </Container>
        }
        {this.props.displayCard &&
        <Container>
          <Card className="mb-5">
            <Card.Body>
              <Card.Title>{this.props.location.display_name}</Card.Title>
              <Card.Text>
                {this.props.location.lat} <br />
                {this.props.location.lon}
              </Card.Text>
            <Card.Img variant="top" src={this.props.cityMap} />
            </Card.Body>
          </Card>
        </Container>
        }
      </>
    )
  }
}

export default CityCard;