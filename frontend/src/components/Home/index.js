import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import welcomeHome from "../img/welcomeHome.png"
import Header from '../header/index'
import './home.css';


function Home() {
  return (
    <div >
    <Header />
    <div className='homeDiv'>
      <Row className='homeRow'>
        <Col sm={5}>
          <Image src={welcomeHome} alt="" className='homeImg' />
        </Col>
        <Col sm={1}></Col>
        <Col sm={5} style={{margin: "95px 0px 100px 90px"}}>
        <p id='p1'><b>DevJob </b><p id='p2'>KSA</p></p>
        <Col>
        <h2>Kingdom of Saudi Arabia Development Job</h2>
        </Col>
        <Link to={"/job"}>
              <Button id='homeB' variant="primary" size="lg">View Jobs</Button>
       </Link>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Home;