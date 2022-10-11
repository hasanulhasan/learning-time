import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
  const quiz = useLoaderData();
  // console.log(quiz.data);
  const { name, total, questions } = quiz.data

  return (
    <div>
      <p className='text-4xl text-center py-5 font-sans font-bold'>Quiz on {name}</p>
      <p className='text-4xl text-center py-5 font-sans font-bold'>You have {total} question, Be Ready!</p>
      {
        questions.map(q => <Questions key={q.id} q={q} ></Questions>)
      }
    </div>
  );
};

export default QuizDetails;