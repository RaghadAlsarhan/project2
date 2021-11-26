import React from "react";
import { useNavigate } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'


function DisplayCard(props){
   
    const navigate = useNavigate();
    const jobId = props.id;
    function handleClick(jobId){
         navigate(`/job/${jobId}`);

    }
    return(
    <Card sx={{ maxWidth: 345,
    display:"flex"
     }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">   
        {props.title}      
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{handleClick(props.id)}}>Learn More</Button>
      </CardActions>
    </Card>
    )
}
export default DisplayCard;