import React from "react";
import {Card, Button, ListGroup, ListGroupItem, Container} from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'

function DisplayDetails(props) {
  return (
    <Container>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Type: {props.type}</ListGroupItem>
        <ListGroupItem>Location: {props.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Link to="/user/signin">
        <Button variant="primary">Apply now</Button>
        </Link>
      </Card.Body>
    </Card>
    </Container>
  );
}
export default DisplayDetails;
