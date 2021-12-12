import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayDetails from "./details";
import DisplayCard from "./details";
import Footer from "../footer"
import './detailPage.css'

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
  }, []);
  
  return (
    <div>
      <div className='cardDiv'>
        <DisplayDetails
          title={title}
          description={desc}
          type={type}
          location={location}
          img={img}
        />
      </div>
      <Footer />
    </div>
  );
}
export default DisplayPage;
