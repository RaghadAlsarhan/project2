import { positions } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Header from "../header";
import {useNavigate} from 'react-router-dom'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [degree, setDegree] = useState("");
  // const [specilization, setSpecilization] = useState("");
  const navigate = useNavigate();


  function handleSubmit(e){
    e.preventDefault();

    axios
    .post('/user/register', {email, password})
    .then((res)=>{
        console.log(res.data);
        navigate("/user/signin")
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  function validate(){
    if(email == "" && password ==""){
      alert("Enter your information")
    }else{
    alert("ok")
  }
}



  return (
    // <Container>
      <div>
    <Header />
    <div style={{marginRight:'4rem',marginLeft:'4rem',marginTop:'4rem'}}>
    <Container style={{borderStyle:'solid',borderRadius:'20px',borderColor:'#dee2e6',borderWidth:'1px',boxShadow:'5px 7px #adb5bd'}}>
    <Form id="regForm" onSubmit={handleSubmit} style={{margin:'60px 100px', width:'700px'}} >
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          id="email"
          placeholder="Enter email"
          name=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDegree">
        <Form.Label>Degree</Form.Label>
        <Form.Control
          type="text"
          placeholder="degree"
          name="degree"
          id="degree"
          // onChange={(e) => {
          //   setDegree(e.target.value);
          // }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSpecilization">
        <Form.Label>Specilization</Form.Label>
        <Form.Control
          type="text"
          placeholder="Specilization"
          name="Specilization"
          id="Specilization"
          // onChange={(e) => {
          //   setSpecilization(e.target.value);
          // }}
        />
      </Form.Group>

      <Form.Group>
      {/* <Link to="/user/signin"> */}
      <Button variant="primary" onClick={validate} type="submit" style={{backgroundColor: "#002952",border:"none",borderRadius:"10px"}}>
        Submit
      </Button>
      {/* </Link> */}
      </Form.Group>
      <br/>
      <Link to="/user/signin">
      <Card.Link href="#" style={{color:'black'}}>Go login</Card.Link>
      </Link>
     </Form>
     </Container>
     </div>
     </div>
  );
}
export default Register;
