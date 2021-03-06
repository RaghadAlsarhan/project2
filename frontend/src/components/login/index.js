import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Form, Button, Card, Container } from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom';
import Footer from '../footer/index'


function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
    
        axios
        .post("/user/signin",{email, password})
        .then((res)=>{
            //console.log(res.data);
            if(!(email === "" && password === "")){
              navigate("/user/signin/applied");
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    function validate(e) {
      if (email === "" && password === "") {
        setErrorMessage("Please enter your information")
      } else {
        handleSubmit(e);
      }
    }

  return (
    // <Container>
    <div>
    <div style={{marginRight:'25rem',marginLeft:'25rem',marginTop:'5rem',marginBottom:'205px'}}>
    <Container style={{borderStyle:'solid',borderRadius:'20px',borderColor:'#dee2e6',borderWidth:'1px',boxShadow:'5px 7px #adb5bd'}}>
    <Form id="formName" onSubmit={handleSubmit} style={{margin:'60px 60px', width:'700px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'red'}}>{errorMessage}</Form.Label><br/>
        <Form.Label>Enter your email</Form.Label>
        <Form.Control style={{width:'500px'}} 
        type="email" 
        placeholder="Enter email" 
        id="email" 
        name="email"
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
        />
        
        <Form.Label>Enter your Password</Form.Label>
        <Form.Control style={{width:'500px'}}
        type="password" 
        placeholder="Password"
        id="password"
        name="password"
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
        />
      </Form.Group>
   
      <Button onClick={validate} variant="primary" type="submit" style={{backgroundColor: "#002952",border:"none",borderRadius:"10px"}}>
        Submit
      </Button>
      <br/><br/>
      <Link to="/user/register">
      <Card.Link href="#" style={{color:'grey'}}>If you did not register, click here</Card.Link>
      </Link>
    </Form>
    </Container>
  </div>
  <Footer />
  </div>
  );
}
export default Login;
