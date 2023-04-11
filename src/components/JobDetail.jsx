import React, { useEffect, useState } from "react";
import ViewDetail from "./ViewDetail";

const JobDetail = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const loadDetail = async () => {
            const res = await fetch('features.json');
            const detail = await res.json();
            console.log(detail)
            setDetail(detail)
        }
        loadDetail()
    }, [])
    console.log(detail)

    return (
        <>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 h-100 gap-2 ">
            {
                detail.map((viewDetail) => {
                    return <ViewDetail viewDetail={viewDetail} key ={viewDetail.id} />
                }
            )}
            </div>
        </>
    );
};

export default JobDetail;