import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";

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
     <div>
    {data.map((elem)=>{
        return(
        <DisplayCard
        id = {elem.id}
        title = {elem.title}
        type = {elem.type}
        location = {elem.location}
        />
        );
    })}
    </div>
  );
}
export default Dashboard;
