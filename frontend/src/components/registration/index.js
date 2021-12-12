import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from '../footer/index'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/user/register", { email, password })
      .then((res) => {
        console.log(res.data);
        if(!(email == "" && password == "")){
          navigate("/user/signin");
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validate(e) {
    if (email == "" && password == "") {
      setErrorMessage("Please enter your information")
    } else {
      handleSubmit(e);
    }
  }

  return (
    <div>
      <div
        style={{marginRight:'20rem',marginLeft:'20rem',marginTop:'4rem',marginBottom:'115px'}}
      >
        <Container
          style={{
            borderStyle: "solid",
            borderRadius: "20px",
            borderColor: "#dee2e6",
            borderWidth: "1px",
            boxShadow: "5px 7px #adb5bd",
          }}
        >
          <Form
            id="regForm"
            onSubmit={handleSubmit}
            style={{margin:'20px 60px 70px 60px', width:'700px',height:'400px'}}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label  style={{color:'red'}}>{errorMessage}</Form.Label><br/>
              <Form.Label>Email address</Form.Label>
              <Form.Control
              style={{width:'650px'}}
                type="email"
                id="email"
                placeholder="Enter email"
                name=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group style={{width:'650px'}} className="mb-3" controlId="formBasicPassword">
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

            <Form.Group style={{width:'650px'}} className="mb-3" controlId="formBasicDegree">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="degree"
                name="degree"
                id="degree"
              />
            </Form.Group>

            <Form.Group style={{width:'650px'}} className="mb-3" controlId="formBasicSpecilization">
              <Form.Label>Specilization</Form.Label>
              <Form.Control
                type="text"
                placeholder="Specilization"
                name="Specilization"
                id="Specilization"
              />
            </Form.Group>

            <Form.Group>
              <Button
                variant="primary"
                onClick={validate}
                type="submit"
                style={{
                  backgroundColor: "#002952",
                  border: "none",
                  borderRadius: "10px",
                  marginBottom:'12px'
                }}
              >
                Submit
              </Button>
            </Form.Group>
            <Link to="/user/signin">
              <Card.Link href="#" style={{ color: "grey" }}>
                Login
              </Card.Link>
            </Link>
          </Form>
        </Container>
        
      </div>
      <Footer />
    </div>
  );
}
export default Register;
