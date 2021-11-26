//import "Login.css";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom';


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
    
        axios
        .post("/user/signin",{email, password})
        .then((res)=>{
            console.log(res.data);
            navigate("/job/id");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

  return (
    <div>
    <Form id="formName" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        id="email" 
        name="email"
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
        />
        
        <Form.Label>Enter your Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        id="password"
        name="password"
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br/>
      <Link to="/user/register">
      <Card.Link href="#">If you did not register, register</Card.Link>
      </Link>
    </Form>
    
    </div>
  );
}
export default Login;
