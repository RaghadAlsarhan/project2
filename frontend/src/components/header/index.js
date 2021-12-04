import React from "react";
import { Nav, Image} from "react-bootstrap";
import Devjob from '../img/dev.png'
import './header.css'

function Header() {
  return (
	<Nav defaultActiveKey="/" as="ul" className='nav'>
		<Nav.Item as="li">
	<Image src={Devjob} alt="logo"></Image>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px",marginLeft:'10px'}}>
	  <Nav.Link href="/" style={{color:"#EBE5C1"}}>Home</Nav.Link>
	</Nav.Item>
	<Nav.Item as="li" style={{marginTop:"60px"}}>
	  <Nav.Link href="/job" style={{color:"#EBE5C1"}}>Jobs</Nav.Link>
	</Nav.Item>
  </Nav>
  );
}

export default Header;
