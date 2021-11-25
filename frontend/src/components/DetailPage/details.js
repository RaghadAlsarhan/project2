import React from "react";
import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";

function DisplayDetails(props) {
  return (
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
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        <Button variant="primary">Apply now</Button>
      </Card.Body>
    </Card>
  );
}
export default DisplayDetails;
