import React, { useEffect, useState } from "react";
import FeatureData from "./FeatureData";

const Cards = () => {
    const [item, setItem] = useState([]);



    useEffect(() => {
        const loadItem = async () => {
            const res = await fetch('features.json');
            const item = await res.json();
            console.log(item)
            setItem(item)
        }
        loadItem()
    }, [])
    console.log(item)
    return (
        <>
            <section>
            <div className="text-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-10 mb-10">
                    <h2 className="text-2xl font-bold">Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 gap-2 h-6">
            {
                item.map((featureData) => {
                    return <FeatureData featureData={featureData} />
                }
            )}
            </div>
        </>
    );
};

export default Cards;