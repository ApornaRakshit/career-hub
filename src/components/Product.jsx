import React from "react";
import { Link, } from 'react-router-dom'

const Product = (props) => {
    const { Responsibility, description, requirements, experience } = props.product

const handleAddToCart = props.handleAddToCart

    return (
        <div className="">
            <div className="product  mb-10 ml-10 mr-10 w-400 h-full">

                <div className="product-info m-5">
                    <p>Job Description:{description}</p>
                    <p>Job responsibility:{Responsibility}</p>
                    <p>Educational Requirements:{requirements}</p>
                    <p>Experiences{experience}</p>
                </div>
               <button onClick={()=>handleAddToCart(props.product)} className='bg-blue-400 text-center rounded-md px-4 py-2 mb-4 text-white fw-bold'>Apply Now
                </button>


                
            </div>
        </div>
    )
}

export default Product 