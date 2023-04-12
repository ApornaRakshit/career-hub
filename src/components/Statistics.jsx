import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import AnotherChart from './AnotherChart';


const Statistics = () => {
    const data = [
        {
            assignment: 'A1',
            marks: 46,
            quiz: 2400,
            amt: 10,
        },
        {
            assignment: 'A2',
            marks: 45,
            quiz: 2400,
            amt: 20,
        },
        {
            assignment: 'A3',
            marks: 55,
            quiz: 2400,
            amt: 30,
        },
        {
            assignment: 'A4',
            marks: 49,
            quiz: 2400,
            amt: 40,
        },
        {
            assignment: 'A5',
            marks: 50,
            quiz: 2400,
            amt: 50,
        },
        {
            assignment: 'A6',
            marks: 50,
            quiz: 2400,
            amt: 60,
        },
        {
            assignment: 'A7',
            marks: 60,
            quiz: 2400,
            amt: 70,
        },
        {
            assignment: 'A8',
            marks: 54,
            quiz: 2400,
            amt: 80,
        },
    ];

    return (

        <div className='flex'>
            <div className='mt-20 mx-5'>
                <h4 className='mb-5'>Assignment.No vs Marks</h4>
                <AreaChart width={400} height={300} data={data}>
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    <XAxis dataKey="assignment" />
                    <Tooltip></Tooltip>
                    <YAxis dataKey="amt"></YAxis>
                </AreaChart>
            </div>
            <div className='mt-20 ms-5'>
                <AnotherChart></AnotherChart>
            </div>
        </div>



    );
};

export default Statistics;
