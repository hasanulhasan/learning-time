import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Statistics = () => {
  const dataa = useLoaderData();
  const data = dataa.data
  return (
    <div>
      <h1 className="text-4xl text-center font-bold md:tracking-tight md:text-5xl p-4">Here The Statistics of Quizs</h1>
      <div className="text-center text-xl">
        <p>Name of quiz In X axis</p>
        <p>Number of quiz In Y axis</p>
      </div>
      <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
        <LineChart width={800} height={300} data={data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;