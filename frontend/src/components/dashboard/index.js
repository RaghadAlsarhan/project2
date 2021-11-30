import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import Header from "../header/index";
import { Container } from "@mui/material";
import Footer from "../footer";
import { useParams } from "react-router";

function Dashboard() {
  // statedata
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const { location } = useParams;

  // axios
  useEffect(() => {
    axios.get("/job").then((res) => {
      console.log(res.data);
      setData(res.data);
      //console.log(data);
    });
  }, []);
  console.log(data);

  function handleClick() {
    //useEffect(()=>{
    axios.get(`/job/filter/${search}`, { location }).then((res) => {
      console.log(data);
      //setSearch(res.data.location)
      setData(res.data);
    });
    //},[])
  }

  return (
    <div>
      <Header />
      <div style={{ marginRight: "4rem", marginLeft: "4rem" }}>
        <div style={{marginTop:'1rem',marginLeft:'4%'}}>
        <labal style={{color:'#002952'}}>search by city:   </labal>
        <input
        style={{borderRadius:'8px',borderColor:'#002952 #002952'}}
          type="text"
          id="search"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleClick} style={{backgroundColor:'#002952', color:'white', borderRadius:'9px',marginLeft:'7px'}}>search</button>
        </div>

        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          {data.map((elem) => {
            return (
              <DisplayCard
                id={elem.id}
                title={elem.title}
                type={elem.type}
                location={elem.location}
                img={elem.img}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
