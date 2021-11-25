import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DisplayDetails from './details';

function DisplayPage(){
    const [data, setData] = useState([]);

    const {state} = useLocation();
    const { id } = state;

    useEffect(()=>{
        axios.get("/job/:id")
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    })
    return(
        <div>
            {data.map((elem)=>{
                return(
                    <DisplayDetails 
                    title={elem.title}
                    description={elem.description}
                    type={elem.type}
                    location={elem.location}
                    />
                )
            })}
        </div>
    )
} 
export default DisplayPage;