import React from "react";
import { useNavigate } from "react-router";
import {ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap'
import './DisplayCard.css'



function DisplayCard(props){
   
    const navigate = useNavigate();
    const jobId = props.id;
    function handleClick(jobId){
         navigate(`/job/${jobId}`);

    }
    return(
      <Card className='card' style={{borderRadius:'20px'}}>
      <Card.Img className='cardImg' variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={{color:'#002952'}}>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Type: {props.type}</ListGroupItem>
            <ListGroupItem>Location: {props.location}</ListGroupItem>
          </ListGroup>
          <Button className='Button' 
          style={{
            marginTop: '7px',
            marginBottom: '3px',
            backgroundColor:  '#9A381D',
            border: 'none',
            borderRadius: '15px',
            opacity: '.9',
            marginLeft: '30%'
        }}
          size="small" onClick={()=>{handleClick(props.id)}}>Show details</Button>
      </Card.Body>
    </Card>
    )
}
export default DisplayCard;