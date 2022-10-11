import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
  const quiz = useLoaderData();
  const { name, total, questions } = quiz.data;
  const [count, setCount] = useState(0);
  console.log(count)

  return (
    <div>
      <div className="max-w-4xl px-6 py-8 mx-auto space-y-6">
        <article className="space-y-8 rounded-lg dark:bg-orange-700 dark:text-gray-50">
          <div>
            <h1 className="text-4xl text-center font-bold md:tracking-tight md:text-5xl p-4">Quiz on {name}</h1>
            <p className="text-2xl text-center md:tracking-tight md:text-5xl p-4">You have {total} question, Be Ready!</p>
          </div>
        </article>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">{count}/{quiz.data.questions.length}</h6>
          <p class="text-sm font-lg tracking-widest text-gray-800 lg:text-base">
            Your score
          </p>
        </div>
      </div>
      {
        questions.map(q => <Questions key={q.id} q={q} count={count} setCount={setCount}></Questions>)
      }
    </div>
  );
};

export default QuizDetails;