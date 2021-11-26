import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import DisplayDetails from './details';
import { useParams, } from "react-router-dom" 
//import { job } from '../../../../backend/routers/jobDB';
import DisplayDetails from './details';
import DisplayCard from './details'

function DisplayPage(){
    const [data, setData] = useState([]);
    const {id} = useParams()
  
    useEffect(()=>{
        axios.get(`/job/${id}`)
        .then((res)=>{
            //console.log(res.data);
            setData(res.data);
            console.log(data);
        })
        console.log(setData);
        console.log(data);
    },[])
    return(
        <div>
            {console.log(data)}
            <DisplayDetails 
            title={DisplayCard.title}
            description={DisplayCard.description}
            type={DisplayCard.type}
            location={DisplayCard.location}
            />
        </div>
    )
} 
export default DisplayPage;