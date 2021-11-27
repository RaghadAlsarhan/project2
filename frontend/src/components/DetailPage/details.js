import React from "react";
import {Card, Button, ListGroup, ListGroupItem, Container, Row} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function DisplayDetails(props) {
  return (
    <Container>
      <Row sm={9}>
      <Card style={{ width: "70rem", height: "auto" }}>
        <Card.Body>
          <Card.Img
            style={{ width: "30rem", height: "15rem",marginLeft:'4rem' }} variant="top" src={props.img}/>
          <Link to="/user/signin">
            <Button variant="primary" size="lg" style={{backgroundColor: "#002952",border:"none",borderRadius:"10px",marginLeft:'20rem'}}>Apply now</Button>
          </Link>
        </Card.Body>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Type: {props.type}</ListGroupItem>
            <ListGroupItem>Location: {props.location}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  );
}
export default DisplayDetails;
