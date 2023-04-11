import React from "react";
import Images from '../Images/P3OLGJ1 copy 1.png';
import Card from "./card";
import Cards from "./Cards";

const Home = () => {

    return (
        <div>
            <div className='my-container px-4 flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>

                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            One Step <br className='hidden md:block' /> Closer To Your{' '} <br />
                            <span className='inline-block text-blue-400'>Dream Job</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>
                    <button className='bg-blue-400 rounded-md px-4 py-2 mt-4 text-white fw-bold'>Get Started</button>
                </div>
                <div className='mt-10'>
                    <img className='person-img' src={Images} alt=""></img>
                </div>
            </div>

            <Card />
            <Cards />

        </div>

    );
};

export default Home;