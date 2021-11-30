import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
//import DisplayDetails from './details';
import { useParams } from "react-router-dom";
//import { job } from '../../../../backend/routers/jobDB';
import DisplayDetails from "./details";
import DisplayCard from "./details";
import Header from "../header";

function DisplayPage() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [type, setType] = useState([]);
  const [location, setLocation] = useState([]);
  const [img, setImg] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/job/${id}`).then((res) => {
      setData(res.data)
      setTitle(res.data.title);
      setDesc(res.data.description);
      setType(res.data.type);
      setLocation(res.data.location);
      setImg(res.data.img);
      })
      // console.log({desc});
  }, []);
  
  return (
    <div>
      <Header />
      <div style={{marginRight:'4rem',marginLeft:'4rem'}}>
        <DisplayDetails
          title={title}
          description={desc}
          type={type}
          location={location}
          img={img}
        />
      </div>
    </div>
  );
}
export default DisplayPage;
