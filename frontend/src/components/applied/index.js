import Header from "../header";
import {Card} from 'react-bootstrap'

function Applied() {
  return (
    <div>
      <Header />
      <div style={{ marginRight: "4rem", marginLeft: "25%", height:'5rem', width:'40rem', boxShadow:'2px 2px 2px 2px',borderRadius:'10px',position:'relative' }}>
          <div style={{marginTop:'5rem'}}>
          <h1 style={{color:'#002952',position:'absolute',paddingLeft:'20%',paddingTop:'2%'}}>Your request is sent</h1>
          </div>
      </div>
    </div>
  );
}
export default Applied;
