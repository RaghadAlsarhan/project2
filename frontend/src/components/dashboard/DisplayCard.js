import React from "react";
import { useNavigate } from "react-router";
import {ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap'
import { display } from "@mui/system";
import { Container } from "@mui/material";


function DisplayCard(props){
   
    const navigate = useNavigate();
    const jobId = props.id;
    function handleClick(jobId){
         navigate(`/job/${jobId}`);

    }
    return(
      <Card style={{width: '20rem',height:"auto",borderRadius:"20px"}}>
      <Card.Img style={{borderRadius:"20px",height:'10rem',width:'317px'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Type: {props.type}</ListGroupItem>
            <ListGroupItem>Location: {props.location}</ListGroupItem>
          </ListGroup>
          <Button size="small" style={{marginTop:"10px",backgroundColor: "#9A381D",border:"none",borderRadius:"15px",opacity:".9",marginLeft:"30%"}} onClick={()=>{handleClick(props.id)}}>Show details</Button>
      </Card.Body>
    </Card>
    )
}
export default DisplayCard;


 



// <Card sx={{ maxWidth: 345,
//   display:"flex"
//    }}>
//     <CardMedia
//       component="img"
//       alt="green iguana"
//       height="140"
//       image="/static/images/cards/contemplative-reptile.jpg"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">   
//       {props.title}      
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {props.type}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {props.location}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {props.description}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small" onClick={()=>{handleClick(props.id)}}>Learn More</Button>
//     </CardActions>
//   </Card>