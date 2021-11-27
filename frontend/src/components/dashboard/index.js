import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import Header from '../header/index'
import { Container } from "@mui/material";
import Footer from "../footer";

function Dashboard() {
  // statedata
  const [data, setData] = useState([]);

  // axios
  useEffect(() => {
    axios.get("/job").then((res) => {
      console.log(res.data);
      setData(res.data);
      //console.log(data);
    });
  }, []);
    console.log(data);

  return (
    <Container>
      <Header />
     <div style={{display:"inline-flex",gap:"20px", justifyContent:"space-around",flexWrap:"wrap",marginTop:'6 rem'}}>
       
    {data.map((elem)=>{
        return(
        <DisplayCard
        id = {elem.id}
        title = {elem.title}
        type = {elem.type}
        location = {elem.location}
        img = {elem.img}
        />
        );
    })}
    {/* <Footer /> */}
    </div>
   </Container>
  );
}
export default Dashboard;
