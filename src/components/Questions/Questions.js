import React, { useState } from 'react';
import Options from '../Options/Options';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Questions = ({ q, count, setCount }) => {
  const { question, id, correctAnswer, options, total } = q;
  const showCorrectAns = () => {
    swal("Here the ans:", `${correctAnswer}`, "info")
  }
  const ansHandle = (option) => {
    if (option === correctAnswer) {
      swal("Great!!", "Your answer is correct!", "success");
      setCount(count + 1);
    }
    else {
      swal("Oops!!", "Your are Wrong!", "error");
    }
  }
  return (
    <div>
      <div className="max-w-3xl px-6 py-10 mx-auto space-y-12 border-solid border-2 my-4 shadow-lg">
        <article className="space-y-8 rounded-lg dark:bg-gray-800 dark:text-gray-50">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold md:tracking-tight md:text-3xl p-4">{question} <button onClick={showCorrectAns}><FontAwesomeIcon icon={faEye}
              className="text-yellow-500"></FontAwesomeIcon></button></h1>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 border-t border-dashed dark:border-gray-400">
            {
              options.map(option => <Options
                key={option.id}
                option={option}
                ansHandle={ansHandle}
              ></Options>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;