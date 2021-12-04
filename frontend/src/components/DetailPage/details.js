import React from "react";
import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import './detailPage.css';

function DisplayDetails(props) {
  return (
      <Card className='cardstyle'>
        <Card.Body className='cardB' >
          <Card.Img className='cardImg'
             variant="top" src={props.img}/>
          <Link to="/user/signin">
            <Button id='b1' variant="primary" size="lg">Apply now</Button>
          </Link>
        </Card.Body>
        <Card.Body style={{ margin:'2rem 2rem'}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Type: {props.type}</ListGroupItem>
            <ListGroupItem>Location: {props.location}</ListGroupItem>
          </ListGroup>
        </Card.Body>
          <Card.Text style={{textAlign: 'justify', textJustify:'inter-word'}}>{props.description}</Card.Text>
        </Card.Body>
        
      </Card>
  );
}
export default DisplayDetails;
