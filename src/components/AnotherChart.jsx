import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const AnotherChart = () => {
    const data = [
        {
          assignment: 'A1',
          marks: 4000,
          quiz: 2400,
          amt: 10,
        },
        {
          assignment: 'A2',
          marks: 4000,
          quiz: 2400,
          amt: 20,
        },
        {
          assignment: 'A3',
          marks: 4000,
          quiz: 2400,
          amt: 30,
        },
        {
          assignment: 'A4',
          marks: 4000,
          quiz: 2400,
          amt: 40,
        },
        {
          assignment: 'A5',
          marks: 4000,
          quiz: 2400,
          amt: 50,
        },
        {
          assignment: 'A6',
          marks: 4000,
          quiz: 2400,
          amt:60,
        },
        {
          assignment: 'A7',
          marks: 4000,
          quiz: 2400,
          amt:70,
        },
        {
          assignment: 'A8',
          marks: 4000,
          quiz: 2400,
          amt: 80,
        },
      ];
    return (
        <div className='ms-5'>
            <h4 className='mb-5'>Investment VS Revenue</h4>
            <BarChart width={400} height={300} data={data}>
              <Bar dataKey="marks" fill="#8884d8" />
              <Bar dataKey="quiz" fill="#82ca9d" />
              <XAxis dataKey="assignment" />
              <YAxis dataKey="amt"></YAxis>
              <Tooltip></Tooltip>
              <Legend />
            </BarChart>
        </div>
    );
};

export default AnotherChart;
