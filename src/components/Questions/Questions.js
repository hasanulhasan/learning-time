import React from 'react';
import Options from '../Options/Options';

const Questions = ({ q }) => {
  const { question, id, correctAnswer, options, total } = q;
  // console.log(options);
  // console.log(correctAnswer);
  const ansHandle = (option) => {
    if (option === correctAnswer) {
      console.log('you are correct')
    }
    else {
      console.log('you are wrong');
    }
    // console.log(option)
  }
  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 rounded-lg dark:bg-gray-800 dark:text-gray-50">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl p-4">{question}</h1>
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