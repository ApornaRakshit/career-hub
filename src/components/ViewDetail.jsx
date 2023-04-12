import React, { useEffect, useState } from "react";
import JobDetail from "./JobDetail";

const ViewDetail = () => {
    const [detail, setDetail] = useState([]);

    

    useEffect(() => {
        const loadDetail = async() => {
         const res = await fetch('features.json');
         const detail = await res.json();
         
         setDetail(detail);
        }
        loadDetail();
    }, []);

    return (
        <>
       <div className="text-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10 mb-10">
                    <h2 className="text-2xl font-bold">Job Details</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 h-100 gap-2">
            {
                detail.map(jobDetail => <JobDetail jobDetail = {jobDetail}
                   
                
                ></JobDetail>)
            }
            </div>
        </>
    );

};

export default ViewDetail;