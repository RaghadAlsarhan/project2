import React from "react";
import { Nav, Image, Row, Col, Button } from "react-bootstrap";
import Devjob from '../img/dev.png'

// ,backgroundColor:'#002952 EBE5C2
function Header() {
  return (
	<Nav defaultActiveKey="/" as="ul" style={{marginTop:"-40px",backgroundColor:'#002952',height:"8rem",borderBottomRightRadius:'80px',boxShadow:'1px 1px 1px 1px'}}>
		<Nav.Item as="li">
	<Image src={Devjob} alt="logo" style={{height:"7rem", width:"9rem",marginTop:'27px'}}></Image>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px",marginLeft:'10px'}}>
	  <Nav.Link href="/" style={{color:"#EBE5C1"}}>Home</Nav.Link>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px"}}>
	  <Nav.Link href="/job" style={{color:"#EBE5C1"}}>Jobs</Nav.Link>
	</Nav.Item>
	{/* <Nav.Item as="li" style={{marginTop:"60px"}}>
	  <Nav.Link href="/user/signin" style={{color:"#EBE5C2"}}>Signin</Nav.Link>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px"}}>
	  <Nav.Link href="/user/register" style={{color:"#EBE5C2"}}>Signup</Nav.Link>
	</Nav.Item> */}
  </Nav>
  );
}

export default Header;
