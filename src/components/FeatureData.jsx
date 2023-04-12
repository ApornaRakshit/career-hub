import React from "react";
import { Link, } from 'react-router-dom'

const FeatureData = (props) => {
  //console.log(props.featureData);
  const { name, company, logo, _job, _job_ ,id} = props.featureData

  const handleAddToCart = props.handleAddToCart

  return (
    <div>
      <div>
        <div className="card w-full h-96 mb-10 bg-base-100 shadow-2xl">
          <figure><img className="mx-auto my-6 text-center " src={logo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
            </h2>
            <div className="">{company}</div>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">{_job}</div>
              <div className="badge badge-outline">{_job_}</div>
            </div>
            <div className="card-actions justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>{_job}

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {_job_}
             
            </div>
            <div className="card-actions">
              <Link to='/viewDetail' className='default'><button onClick={()=>handleAddToCart(props.product[id])} className='bg-blue-400 text-center rounded-md px-4 py-2 mb-2 text-white fw-bold'>View Detail</button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeatureData;