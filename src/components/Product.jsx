
import React from "react";

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
                
            </div>
            <div>

            </div>
        </div>
    )
}

export default Product 

 