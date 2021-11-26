import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./home.css";
import welcomeHome from './img/welcomeHome';


function Home() {
  return (
    <Container className="mainCont">
      <Row style={{highet: "100rem",margin: "200px 70px"}}>
        <Col>
          <Image src={welcomeHome} alt=""/>
        </Col>
        <Col xs={5}>
        <h1>DevJob KSA</h1>
        <Col>
        <h2>Kingdom of Saudi Arabia Development Job</h2>
        </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

{
  /* <Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
  <Link to={"/job"}>
  <button>click here</button>
</Link>
</Card> */
}


{/* <Card style={{ width: "18rem", boarder: "none" }}>
            <Card.Img variant="left" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>DevJob KSA</Card.Title>
              <Card.Text>
                Kingdom of Saudi Arabia Development Job
              </Card.Text>
              <Link to={"/job"}>
              <Button variant="primary">View Jobs</Button>
              </Link>
            </Card.Body>
          </Card> */}