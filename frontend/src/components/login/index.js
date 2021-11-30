//import "Login.css";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom';
import Header from "../header";


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
            navigate("/user/signin/applied");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

  return (
    // <Container>
    <div>
    <Header />
    <div style={{marginRight:'4rem',marginLeft:'4rem',marginTop:'4rem'}}>
    <Container style={{borderStyle:'solid',borderRadius:'20px',borderColor:'#dee2e6',borderWidth:'1px',boxShadow:'5px 7px #adb5bd'}}>
    <Form id="formName" onSubmit={handleSubmit} style={{margin:'60px 100px', width:'700px'}}>
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
   
      <Button variant="primary" type="submit" style={{backgroundColor: "#002952",border:"none",borderRadius:"10px"}}>
        Submit
      </Button>
      <br/><br/>
      <Link to="/user/register">
      <Card.Link href="#" style={{color:'black'}}>If you did not register, click here</Card.Link>
      </Link>
    </Form>
    </Container>
  {/* </Container> */}
  </div>
  </div>
  );
}
export default Login;
