import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import welcomeHome from "../img/welcomeHome.png"
import aboutPic from "../img/aboutPic.png"
import contactPic from "../img/contactPic.png"
import Footer from '../footer/index'
import './home.css';


function Home() {
  return (
    <div >
    <div className='homeDiv'>
      <Row className='homeRow'>
        <Col sm={5}>
          <Image src={welcomeHome} alt="" className='homeImg' />
        </Col>
        <Col sm={1}></Col>
        <Col sm={5} style={{margin: "180px 0px 100px 90px"}}>
        <p id='p1'><b>DevJob </b><p id='p3'>KSA</p></p>
        <Col>
        <h2>Kingdom of Saudi Arabia Development Job</h2>
        </Col>
        <Link to={"/job"}>
              <Button id='homeB' variant="primary" size="lg">View Jobs</Button>
       </Link>
        </Col>
      </Row>
      </div>
      <div className='homeDiv2'>
      <Row className='homeRow2'>
        <Col sm={5} style={{margin: "190px 0px 100px 90px"}}>
        <p id='p2'><b>About DevJob</b></p>
        <Col>
        <h2 style={{color:'#FFF6C2',opacity: '1'}}><br/>A web app that you can find and apply  to development jobs in KSA </h2>
        </Col>
        </Col>
        <Col sm={1}></Col>
        <Col sm={5}>
          <Image src={aboutPic} alt="" className='homeImg2' />
        </Col>
      </Row>
      </div>
      <div className='homeDiv'>
      <Row className='homeRow'>
        <Col sm={5}>
          <Image src={contactPic} alt="" className='homeImg3' />
        </Col>
        <Col sm={1}></Col>
        <Col sm={5} style={{margin: "260px 0px 100px 90px"}}>
        <p id='p1'><b>Welcom</b></p>
        <Col>
        <h2 style={{opacity: '1'}}>to DevJob the web app of development jobs</h2>
        </Col>
        </Col>
      </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Home;