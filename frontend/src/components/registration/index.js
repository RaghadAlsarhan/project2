import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [degree, setDegree] = useState("");
  const [specilization, setSpecilization] = useState("");
  const [GPA, setGPA] = useState("");

  function handleSubmit(e){
    e.preventdefault()

    axios
    .post('user/register', {email, password, degree, specilization, GPA})
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })

  }

  return (
    <Form id="regForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
          onChange={(e) => {
            setDegree(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSpecilization">
        <Form.Label>Specilization</Form.Label>
        <Form.Control
          type="text"
          placeholder="Specilization"
          name="Specilization"
          id="Specilization"
          onChange={(e) => {
            setSpecilization(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGPA">
        <Form.Label>GPA</Form.Label>
        <Form.Control
          type="text"
          placeholder="GPA"
          name="GPA"
          id="GPA"
          onChange={(e) => {
            setGPA(e.target.value);
          }}
        />
      </Form.Group>
      <Link to="/user/signin">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Link>
    </Form>
  );
}
export default Register;
