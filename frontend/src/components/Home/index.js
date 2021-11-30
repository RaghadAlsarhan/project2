import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image } from "react-bootstrap";
import welcomeHome from "../img/welcomeHome.png"
import Header from '../header/index'


function Home() {
  return (
    <div >
    <Header />
    <div style={{marginRight:'4rem',marginLeft:'4rem'}}>
      <Row style={{margin: "0px 1px",marginTop:'3rem'}}>
        <Col sm={5}>
          <Image src={welcomeHome} alt="" style={{height:"30rem", width:"35rem",marginTop:'20px'}}/>
        </Col>
        <Col sm={1}></Col>
        {/* <Col></Col> */}
        <Col sm={5} style={{margin: "95px 0px 100px 90px"}}>
        <p style={{fontSize:"60px",color:"#001F3D"}}><b>DevJob </b><p style={{fontSize:"20px",display:"inline",opacity:".7"}}>KSA</p></p>
        <Col>
        <h2 style={{color:"#9A381D",opacity:".7"}}>Kingdom of Saudi Arabia Development Job</h2>
        
        </Col>
        <Link to={"/job"}>
              <Button variant="primary" size="lg" style={{backgroundColor: "#9A381D", marginTop:"30px",border:"none",borderRadius:"20px",opacity:".9"}}>View Jobs</Button>
       </Link>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Home;