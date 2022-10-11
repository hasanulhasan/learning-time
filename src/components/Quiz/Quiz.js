import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Quiz = () => {
  const quizobj = useLoaderData();
  let quizs = quizobj.data;
  return (
    <div>
      <div className='topics py-5'>
        {
          quizs.map(quiz => <QuizTopic key={quiz.id} quiz={quiz}></QuizTopic>)
        }
      </div>

    </div>
  );
};

export default Quiz;