import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const QuizTopic = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/quiz/${id}`)
  }
  return (
    <div className='mx-auto'>
      <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-100">Total quiz: {total}</p>
          </div>
          <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            onClick={() => handleNavigate(id)}
          >Go to quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizTopic;