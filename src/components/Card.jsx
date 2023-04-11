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
        <section>
                <div className="text-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10 mb-10">
                    <h2 className="text-2xl font-bold">Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-12">
          {
            data.map((singleData)=>{
                return <SingleData singleData={singleData} key={singleData._id} />
            })
          } </div> 
        </>
    )
}
export default Card;