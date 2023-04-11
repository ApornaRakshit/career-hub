import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
const Card = () =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch ('JobList.json');
            const data = await res.json();
            console.log(data);
            setData(data);
        };
        loadData();
    },[]);
    return(
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-12">
          {
            data.map((singleData)=>{
                return <SingleData singleData={singleData} />
            })
          } </div> 
        </>
    )
}
export default Card;