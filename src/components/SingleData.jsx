import React from "react";


const SingleData = (props) => {
  console.log(props.singleData)
  const { icons,_name, jobAvailable } = props.singleData;
  return (
    <div>
      <div className="card w-full mb-10 bg-base-100 shadow-2xl">
      <figure><img className="mx-4 my-4" src={icons} /></figure>
        <div className="card-body">
          <h2 className="card-title">{_name}</h2>
          <p>{jobAvailable}</p>
        </div>
      </div>
    </div>
  )
}
export default SingleData;