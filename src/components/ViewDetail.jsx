import React from "react";

const ViewDetail = (props) => {
    console.log(props.viewDetail)
    const {name} =props.viewDetail
    return (
        <div >
            <h2 className="text-center text-2xl font-bold">Job Detail</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>{name}</p>
                    
                </div>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>jjjj</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDetail 