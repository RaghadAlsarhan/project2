import React from "react";
import { Nav, Image, Row, Col, Button } from "react-bootstrap";
import Devjob from '../img/Devjob.png'

function Header() {
  return (
	  <div>
	<Nav defaultActiveKey="/" as="ul" style={{marginLeft:"0px",marginTop:"-20px"}}>
		<Nav.Item as="li">
	<Image src={Devjob} alt="logo" style={{height:"11rem", width:"9rem"}}></Image>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px",marginLeft:'10px'}}>
	  <Nav.Link href="/" style={{color:"#89321A"}}>Home</Nav.Link>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px"}}>
	  <Nav.Link href="/job" style={{color:"#89321A"}}>Jobs</Nav.Link>
	</Nav.Item>
  </Nav>
  <hl style={{width:'10px'}}></hl>
  </div>
  );
}

export default Header;
