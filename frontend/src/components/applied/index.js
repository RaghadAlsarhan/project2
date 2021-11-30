import Header from "../header";
import {Card} from 'react-bootstrap'
import { Container } from "@mui/material";

function Applied() {
  return (
    <div>
      <Header />
      <div style={{ marginRight: "4rem", marginLeft: "5%", height:'5rem', width:'40rem', boxShadow:'1px 1px 1px 1px',borderRadius:'8px',position:'relative',backgroundColor:'#b7efc5' }}>
          <div style={{marginTop:'5rem'}}>
          <h3 style={{color:'#002952',position:'absolute',left:'50px',paddingTop:'3%'}}>Your request has been sent ..</h3>
          </div>
      </div>
    </div>
  );
}
export default Applied;
