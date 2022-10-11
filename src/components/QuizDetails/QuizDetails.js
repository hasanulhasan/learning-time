import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name, total, questions } = quiz.data
  console.log(quiz.data);

  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 rounded-lg dark:bg-orange-700 dark:text-gray-50">
          <div>
            <h1 className="text-4xl text-center font-bold md:tracking-tight md:text-5xl p-4">Quiz on {name}</h1>
            <p className="text-2xl text-center md:tracking-tight md:text-5xl p-4">You have {total} question,Be Ready!</p>
          </div>
        </article>
      </div>
      {
        questions.map(q => <Questions key={q.id} q={q} ></Questions>)
      }
    </div>
  );
};

export default QuizDetails;