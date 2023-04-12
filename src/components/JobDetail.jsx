import React from "react";
import { } from 'react-router-dom'
import {
    MapPinIcon, CreditCardIcon,
    PhoneIcon,EnvelopeIcon
  } from '@heroicons/react/24/solid'

const JobDetail = (props) => {
    //console.log(props.jobDetail);
    const { name,salary, jobTitle, phone, email, address, company } = props.jobDetail;
    return (
        <div className="">
            <div className="card card-side bg-base-100 mx-10 my-10 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="">{company}</div>
                    <div className="card-actions justify-start">
                    <MapPinIcon className='h-6 w-6 gap-0' />
                        {salary}
                        <CreditCardIcon className='h-6 w-6' />
                        {jobTitle}
                    </div>
                    <h2 className="text-start font-semibold">Contact Information</h2>
                    <div className="card-actions">
                    <PhoneIcon className='h-6 w-6 text-black-400' />
                        {phone}
                        <EnvelopeIcon className='h-6 w-6' />
                        {email}
                        <MapPinIcon className='h-6 w-6 gap-0' />
                        {address}
                                    {/*Apply Nowwwwwwwwwww*/}
                        
                        <button className='bg-blue-400 rounded-md px-4 py-2 mt-4 mb-4 text-white fw-bold'>  Apply Now
                        </button>
                        
                        {/* <Link to='/viewDetail' className='default'><button className='bg-blue-400 rounded-md px-4 py-2 mt-4 mb-4 text-white fw-bold'>Apply Now
                        </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default JobDetail;