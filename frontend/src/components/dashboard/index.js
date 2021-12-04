import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import Header from "../header/index";
import Footer from "../footer";
import { useParams } from "react-router";
import './dashboard.css';

function Dashboard() {
  // statedata
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { location } = useParams;

  // axios
  useEffect(() => {
    axios.get("/job").then((res) => {
      setData(res.data);
    });
  }, []);

  function handleClick() {
    axios.get(`/job/filter/${search}`, { location }).then((res) => {
      setData(res.data);
    });
  }

  return (
    <div>
      <Header />
      <div className='inDiv'>
        <div className='searchDiv'>
        <labal>Search by city:   </labal>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handleClick} style={{borderRadius: '9px',marginLeft:'7px'}}>search</button>
        </div>

        <div className='cards'>
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
